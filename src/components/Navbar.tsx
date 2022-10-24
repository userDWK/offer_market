import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCartShopping,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authService } from "../fbase";
import { setIsModal, setMessage } from "../redux/features/modalSlice";
import { useAppSelector } from "../redux/features/userSlice";

interface Nav {
  icon: IconDefinition;
  size: SizeProp | undefined;
  title: string;
  event: boolean;
}

const nav: Nav[] = [
  {
    icon: faCartShopping,
    size: "2x",
    title: "장바구니",
    event: false,
  },
  {
    icon: faHeart,
    size: "2x",
    title: "관심상품",
    event: false,
  },
  {
    icon: faUser,
    size: "2x",
    title: "마이페이지",
    event: true,
  },
  {
    icon: faArrowRight,
    size: "2x",
    title: "로그인",
    event: true,
  },
];

export const Navbar = (): JSX.Element => {
  const isModal = useAppSelector((state) => state.modalData.isModal);
  const message = useAppSelector((state) => state.modalData.message);
  // const user = useAppSelector((state) => state.userData.user);
  const isLoggedIn = useAppSelector((state) => state.userData.isLoggedIn);

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
    e.preventDefault();
    authService.signOut();
    navigate("/");
  };

  return (
    <NavCon>
      <List>
        {nav.map((item, i) => {
          const href = [
            "/cart",
            "/interest",
            isLoggedIn ? "/profile" : "/",
            isLoggedIn ? "/" : "/login",
          ];
          const className =
            i === 3 ? (isLoggedIn ? "login" : "").toString() : "";
          const onClick = [];
          return (
            <Link key={item.title} to={href[i]}>
              <ListItem className={className}>
                {/* <ListItem {item?.event && `onClick=${checkLoggedIn}`.toString()}> */}
                <FontAwesomeIcon icon={item.icon} size={item.size} />
                <SubTitle>{item.title}</SubTitle>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </NavCon>
  );
};

export default Navbar;

const NavCon = styled.nav``;
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  a:last-child li::before {
    display: none;
  }
`;
const ListItem = styled.li`
  position: relative;
  height: 100%;
  font-size: 1rem;
  margin-right: 2rem;
  color: black;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    right: -1rem;
    transform: translate(0, -50%);
    content: "";
    display: block;
    background: rgba(50, 50, 50, 0.5);
    width: 1px;
    height: 70%;
  }
`;
const SubTitle = styled.p`
  margin: 1rem 0 0;
`;
