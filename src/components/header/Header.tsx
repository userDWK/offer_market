import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/images/header.jpg";
// import Modal from "../../Ui/Modal";
import styled, { css } from "styled-components";
import Navbar from "./Navbar";
import { useAppSelector } from "../../redux/features/userSlice";
import { media } from "../../styles/styleUtil";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [enteredFilter, setEnteredFilter] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const isLoggedIn = useAppSelector((state) => state.userData.isLoggedIn);
  const user = useAppSelector((state) => state.userData.user);
  const isModal = useAppSelector((state) => state.modalData.isModal);
  const message = useAppSelector((state) => state.modalData.message);

  const handleText = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchText(target.value);
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredFilter}`;
  }, []);

  return (
    <HeaderBox>
      <Row>
        {/* <Modal
        show={isModal}
        text={message.message}
        type={message.type}
        page={message.page}
        close={() => {
          setIsModal(false);
        }}
      ></Modal> */}
        <LogoBox>
          <Link to="/">
            <Logo src={LogoImg} alt="Logo" />
          </Link>
        </LogoBox>

        <SearchForm isSearch={isSearch} onSubmit={handleSearch}>
          <Select>{/* <Option /> */}</Select>
          <Search type="text" className="search" onChange={handleText} />
          <SearchSub type="submit" value="검색" className="searchSub" />
        </SearchForm>

        <RightBox isSearch={isSearch}>
          <Navbar isSearch={isSearch} setIsSearch={setIsSearch} />
        </RightBox>
      </Row>
      <hr />
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.header`
  width: inherit;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 12rem;
  text-align: center;
  padding: 0 2rem;
`;
const LogoBox = styled.div`
  width: 25%;

  ${media.md`
  width : 35%;  
  `}
`;
const Logo = styled.img`
  width: 21rem;
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  height: 4rem;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  ${({ isSearch }: { isSearch: boolean }) =>
    isSearch &&
    css`
      position: absolute;
      right: 20%;
      width: 45%;
      opacity: 1;
    `}
`;
const Select = styled.select`
  width: 25%;
  height: 100%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 2px solid rgba(50, 50, 50, 0.4);
`;
const Option = styled.option``;

const Search = styled.input`
  padding: 0.5rem 0.75rem 0.5rem 1.5rem;
  flex: 1;
  height: 100%;
  border: 2px solid rgba(50, 50, 50, 0.4);
  border-left: none;
  border-right: none;
  font-size: 1rem;
`;
const SearchSub = styled.input`
  padding: 0.5rem 0.75rem;
  width: 15%;
  height: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: 2px solid rgba(50, 50, 50, 0.4);
  border-left: none;
  background: orange;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: rgba(230, 150, 0, 0.7);
  }
  &:active {
    box-shadow: 0 0 10px rgba(200, 150, 0, 1);
  }
`;

const RightBox = styled.div`
  width: 35%;

  ${media.md`
  width : 40%;
  `}
  ${media.sm`
  width : 50%;
  `}
  ${media.xs`
  width : 70%;
  `}
  
  ${({ isSearch }: { isSearch: boolean }) =>
    isSearch &&
    css`
      width: 9%;
    `}
`;
