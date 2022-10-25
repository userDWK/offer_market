import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCartShopping,
  faMagnifyingGlass,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../fbase";
import { setIsModal, setMessage } from "../redux/features/modalSlice";
import { useAppSelector } from "../redux/features/userSlice";
import { theme } from "../styles/styleUtil";
import { useRef } from "react";

interface Nav {
  icon: IconDefinition;
  size: SizeProp | undefined;
  title: string;
}

const nav: Nav[] = [
  {
    icon: faCartShopping,
    size: "2x",
    title: "장바구니",
  },
  {
    icon: faHeart,
    size: "2x",
    title: "관심상품",
  },
  {
    icon: faUser,
    size: "2x",
    title: "마이페이지",
  },
  {
    icon: faArrowRight,
    size: "2x",
    title: "로그인",
  },
];

export const Navbar = (): JSX.Element => {
  const isModal = useAppSelector((state) => state.modalData.isModal);
  const message = useAppSelector((state) => state.modalData.message);
  // const user = useAppSelector((state) => state.userData.user);
  const isLoggedIn = useAppSelector((state) => state.userData.isLoggedIn);

  // const

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkLoggedIn = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!isLoggedIn) {
      dispatch(
        setMessage({
          text: "로그인 후, 이용해 주세요.",
          type: "Error",
          page: "login",
        })
      );
      dispatch(setIsModal(true));
    }
  };

  const handleLogout = (e: React.MouseEvent<HTMLLIElement>) => {
    if (isLoggedIn) {
      e.preventDefault();
      authService.signOut();
      navigate("/");
    }
  };

  const showSearchForm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.id = target.id ? "" : "view";
  };

  return (
    <NavCon>
      <List>
        <SearchBox onClick={showSearchForm}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          <SearchBtn>검색</SearchBtn>
        </SearchBox>
        {nav.map((item, i) => {
          const href = [
            "/cart",
            "/interest",
            isLoggedIn ? "/profile" : "/",
            isLoggedIn ? "/" : "/login",
          ];
          const className =
            i === 3 ? (isLoggedIn ? "login" : "").toString() : undefined;
          return (
            <ListItem
              key={item.title}
              onClick={
                i === 3 ? handleLogout : i === 4 ? checkLoggedIn : undefined
              }
              className={className}
            >
              <Link to={href[i]}>
                <FontAwesomeIcon icon={item.icon} size={item.size} />
                <SubTitle>{item.title}</SubTitle>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </NavCon>
  );
};

export default Navbar;

const NavCon = styled.nav`
  width: 100%;
`;
const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;

  a:last-child li::before {
    display: none;
  }
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  cursor: pointer;

  &:hover {
    color: ${theme("orange")};
    button {
      color: ${theme("orange")};
    }
  }
`;
const SearchBtn = styled.button`
  border: none;
  background: transparent;
  margin: 1rem 0 0;
  width: 100%;
  font-size: 1rem;
  color: black;
`;
const ListItem = styled.li`
  position: relative;
  width: 20%;
  height: 100%;
  font-size: 1rem;
  color: black;
  cursor: pointer;

  &:hover {
    color: ${theme("orange")};
  }

  &::before {
    position: absolute;
    top: 50%;
    margin: 0 auto;
    transform: translate(0, -50%);
    content: "";
    display: block;
    background: rgba(50, 50, 50, 0.5);
    width: 1px;
    height: 70%;
  }

  &:first-child {
    &::before {
      display: none;
    }
  }
`;
const SubTitle = styled.p`
  margin: 1rem 0 0;
`;
