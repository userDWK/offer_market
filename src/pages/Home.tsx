import React, { useState } from "react";
import mainImg from "../assets/images/main.jpg";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase/compat/app";
import { query, orderBy, limit, getDocs } from "firebase/firestore";
import styled from "styled-components";

const text = [
  "이젠 판매자와 구매자가 가격으로 대화한다!",
  "거래를 희망하는 상품을 검색하고, 희망하는",
  "가격을 오퍼해보세요!",
];
const Home = () => {
  return (
    <HomeBox>
      <Row>
        <AniBox>
          <Background />
          <AniImg src={mainImg} alt="Main background img" />
          <TextBox>
            <TextTitle>오퍼를 통해 원하는 가격에 원하는 상품을 GET!</TextTitle>
            {text.map((msg) => {
              return <Text key={msg}>{msg}</Text>;
            })}
          </TextBox>
        </AniBox>
        <ProductTitle>최근 등록 상품들을 만나보세요!</ProductTitle>
        <ProductHeader>
          <SubTitle>판매 상품</SubTitle>
          <ViewBtn>판매 상품 보기</ViewBtn>
        </ProductHeader>

        <TradeBox>
          <Sell></Sell>
          <Purchase></Purchase>
        </TradeBox>
      </Row>
    </HomeBox>
  );
};

export default Home;

const HomeBox = styled.main`
  min-height: 100rem;
`;
const Row = styled.div`
  margin-top: 10rem;
`;

const AniBox = styled.section``;
const Background = styled.div`
  position: absolute;
  top: 20rem;
  left: 0;
  width: 100vw;
  height: 78rem;
  text-align: center;
  background: rgba(20, 20, 20, 0.8);
`;
const AniImg = styled.img`
  position: relative;
  width: 120rem;
  height: 70rem;
  opacity: 0.8;
`;
const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  margin: 30rem 0 0 10rem;
  width: 120rem;
  letter-spacing: 1px;
`;
const TextTitle = styled.h5`
  font-size: 3.5rem;
  color: rgb(250, 250, 250);
`;
const Text = styled.p`
  padding: 0.5rem 0;
  margin: 0 auto;
  text-align: left;
  font-size: 2.25rem;
  font-weight: 500;
  color: rgb(250, 250, 250);
`;

const ProductTitle = styled.h2``;

const ProductHeader = styled.div``;
const SubTitle = styled.h2``;
const ViewBtn = styled.button``;

const TradeBox = styled.section``;
const Sell = styled.article``;
const Purchase = styled.article``;
