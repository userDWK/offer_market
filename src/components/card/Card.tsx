import { getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { dbService } from "../../fbase";
import { shadow } from "../../styles/styleUtil";

const Card = (): JSX.Element => {
  const location = useLocation().pathname;
  const [Product, setProduct] = useState({});
  useEffect(() => {
    // location.pathname.length === 1 ?
  }, []);
  return (
    <ProductBox page={location}>
      <CardBox>
        <ProductImg />
        <TextBox>
          <ProductTitle></ProductTitle>
          <ProductDesc>
            <Discount></Discount>
            <ProductPrice></ProductPrice>
          </ProductDesc>
        </TextBox>
      </CardBox>
    </ProductBox>
  );
};

export default Card;

const ProductBox = styled.div`
  margin: 5rem 0;
  padding-left: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10% 0%;

  ${({ page }: { page: string }) =>
    page === "/" &&
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
const ProductImg = styled.img`
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
const ProductTitle = styled.h5`
  width: 85%;
  font-size: 1.35rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem;
`;
const ProductDesc = styled.p`
  font-size: 1.25rem;
`;
const ProductPrice = styled.strong`
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
