import React from "react";
import styled from "styled-components";
import { shadow, theme } from "../../styles/styleUtil";
import Card from "./Card";

interface CardBoxProps {
  type: string;
  size: number;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardBox = ({ type, size, onclick }: CardBoxProps): JSX.Element => {
  return (
    <>
      <ItemHeaderBox>
        <SubTitle>{type} 상품</SubTitle>
        <ViewBtn onClick={onclick}>
          {type} {size === 4 ? "상품 보기" : "등록 하기"}
        </ViewBtn>
      </ItemHeaderBox>
      <TradeBox>
        {type === "판매" ? (
          <SellItems>
            <Card type={type} size={4} />
          </SellItems>
        ) : (
          <PurchaseItems>
            <Card type={type} size={4} />
          </PurchaseItems>
        )}
      </TradeBox>
    </>
  );
};

export default CardBox;

const ItemHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
`;
const SubTitle = styled.h3`
  font-size: 2rem;
`;
const ViewBtn = styled.button`
  padding: 1.25rem 2rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  background: ${theme("orange")};
  cursor: pointer;

  &:hover {
    background: ${theme("darkorange")};
    ${shadow(1)};
  }

  &:active {
    color: white;
    ${shadow(2)};
  }
`;

const TradeBox = styled.section``;
const SellItems = styled.article``;
const PurchaseItems = styled(SellItems)``;
