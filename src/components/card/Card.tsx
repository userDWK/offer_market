import { useState, useEffect, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { useAppSelector } from "../../redux/features/modalSlice";
import { shadow } from "../../styles/styleUtil";
import { sellItemsProps } from "../../redux/features/itemSlice";
import { purchaseItemsProps } from "../../redux/features/itemSlice";

interface CardProps {
  type: string;
  size: number;
}

const Card = ({ type, size }: CardProps): JSX.Element => {
  const [focusItems, setFocusItems] = useState<
    sellItemsProps[] | purchaseItemsProps[] | null
  >(null);

  const sellItems: sellItemsProps[] = useAppSelector(
    (state) => state.itemData.sellItems
  );
  const purchaseItems: purchaseItemsProps[] = useAppSelector(
    (state) => state.itemData.purchaseItems
  );

  const path = useLocation().pathname;
  const navigate = useNavigate();

  const viewItemDesc = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    path.length === 1 ? navigate("/") : navigate("/");
  };
  const sliceItems = () => {
    setFocusItems(
      type === "판매" ? sellItems.slice(0, size) : purchaseItems?.slice(0, size)
    );
  };
  useEffect(() => {
    sliceItems();
  }, [sellItems, purchaseItems]);
  return (
    <>
      {focusItems?.map((item) => {
        return (
          <ItemBox key={item.date} path={path} onClick={viewItemDesc}>
            <CardBox>
              <ItemImg />
              <TextBox>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDesc>
                  <Discount></Discount>
                  <ItemPrice>{+item.price.toLocaleString()}원</ItemPrice>
                </ItemDesc>
              </TextBox>
            </CardBox>
          </ItemBox>
        );
      })}
    </>
  );
};

export default Card;

const ItemBox = styled.div`
  margin: 5rem 0;
  padding-left: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10% 0%;

  ${({ path }: { path: string }) =>
    path === "/" &&
    css`
      grid-template-rows: 1fr;
    `}
`;

const CardBox = styled.div`
  position: relative;
  height: 35rem;
  width: 25rem;
  border-radius: 0.75rem;
  cursor: pointer;

  &:last-child {
    gap: 0;
  }
  &:hover {
    ${shadow(2)}
  }
`;
const ItemImg = styled.img`
  position: relative;
  top: 1rem;
  left: 50%;
  transform: translate(-50%);
  height: 16rem;
  max-width: 25rem;
`;
const TextBox = styled.div`
  position: relative;
  margin-top: 3rem;
  left: 10%;
  color: black;
`;
const ItemTitle = styled.h5`
  width: 85%;
  font-size: 1.35rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem;
`;
const ItemDesc = styled.p`
  font-size: 1.25rem;
`;
const ItemPrice = styled.strong`
  font-size: 1.5rem;
  color: #ae0000;
  margin: 0.5rem 0 1.5rem;
  font-weight: bold;
`;
const Discount = styled.span`
  position: relative;
  color: rgba(50, 50, 50, 0.6);
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, 50%);
    width: 100%;
    height: 1px;
    background: rgba(50, 50, 50, 0.6);
  }
`;
