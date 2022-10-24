import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/images/header.jpg";
// import Modal from "../../Ui/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { authService } from "../../fbase";
import styled from "styled-components";
import Navbar from "../Navbar";
import { useAppSelector } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { setIsModal, setMessage } from "../../redux/features/modalSlice";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [enteredFilter, setEnteredFilter] = useState("");

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
        <Left>
          <Link to="/">
            <Logo src={LogoImg} alt="headerLogo" width="180" />
          </Link>
        </Left>
        <Center>
          <SearchForm onSubmit={handleSearch}>
            <SelectBox className="header">
              <Select>{/* <Option /> */}</Select>
            </SelectBox>
            <Search type="text" className="search" onChange={handleText} />
            <SearchSub type="submit" value="검색" className="searchSub" />
          </SearchForm>
        </Center>
        <Right>
          <Navbar />
        </Right>
      </Row>
      <hr />
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.header``;
const Logo = styled.img``;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  text-align: center;
`;
const Left = styled.div`
  width: 25%;
  margin-left: 5rem;
`;
const LogoBox = styled.div``;

const Center = styled.div`
  width: 40%;
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
`;
const SelectBox = styled.div``;
const Select = styled.select``;
const Option = styled.option``;

const Search = styled.input`
  padding: 0.5rem 0.75rem 0.5rem 1.5rem;
  width: 50%;
  border: 2px solid rgba(50, 50, 50, 0.4);
  border-left: none;
  border-right: none;
  font-size: 1rem;
`;
const SearchSub = styled.input`
  padding: 0.5rem 0.75rem;
  width: 15%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-left: none;
  background: orange;
  cursor: pointer;

  &:hover {
    background: rgba(230, 150, 0, 0.7);
  }
  &:focus {
    box-shadow: 0 0 10px rgba(200, 150, 0, 1);
  }
`;

const Right = styled.div``;
