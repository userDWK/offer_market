import {
  faFacebook,
  faInstagram,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/header.jpg";
import { media, shadow, theme } from "../../styles/styleUtil";

interface SnsProps {
  icon: IconDefinition;
  title: string;
}

const text = [
  { title: "상호명 및 서비스 제공 : 오퍼마켓" },
  { title: "대표 : 김동우" },
  { title: "부산시 동래구 수안동" },
  { title: "010-1111-2222" },
  { title: "skdoo1213@gmail.com" },
];

const intro = [
  { title: "회사소개", href: "/" },
  { title: "공지사항", href: "/" },
  { title: "개인정보 처리방침", href: "/" },
  { title: "이용 약관", href: "/" },
];

const content = [
  { title: "내부의 소리", href: "/" },
  ,
  { title: "고객 요청 사항", href: "/" },
  { title: "인재 채용", href: "/" },
  { title: "광고 안내", href: "/" },
];

const sns: SnsProps[] = [
  { icon: faFacebook, title: "facebook" },
  { icon: faInstagram, title: "instagram" },
  { icon: faYoutube, title: "youtube" },
];

function Footer(): JSX.Element {
  return (
    <FooterBox>
      <Row>
        <CompanyBox>
          <LogoBox>
            <Link to="/">
              <Logo src={logo} alt="footer logo img"></Logo>
            </Link>
          </LogoBox>
          <TextBox>
            {text.map((item) => {
              return <Text key={item.title}>{item.title}</Text>;
            })}
          </TextBox>
        </CompanyBox>
        <IntroBox>
          <Title>인트로</Title>
          {intro.map((item) => {
            return (
              <Intro key={item.title}>
                <Link to={item.href}>{item.title}</Link>
              </Intro>
            );
          })}
        </IntroBox>
        <ContentBox>
          <Title>컨텐츠</Title>
          {intro.map((item) => {
            return (
              <Content key={item.title}>
                <Link to={item.href}>{item.title}</Link>
              </Content>
            );
          })}
        </ContentBox>
        <SnsBox>
          {sns.map((icon, i) => {
            return (
              <Sns key={icon.title}>
                <FontAwesomeIcon icon={icon.icon} />
              </Sns>
            );
          })}
          <Corp>© OFFERMARKET Corp</Corp>
        </SnsBox>
      </Row>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.footer`
  position: relative;
  bottom: 0;
  padding: 6rem 0;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${theme("gray")};
    margin-bottom: 6rem;
  }
`;
const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  ${media.md`
  flex-wrap : wrap;
  `}
`;
const CompanyBox = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  width: 50;

  ${media.xs`
  flex-direction : column;
  margin-left : 3rem;
  `}
`;
const LogoBox = styled.div`
  margin: 0 3rem;
  width: 20rem;
`;
const Logo = styled.img`
  width: 100%;
  cursor: pointer;
`;
const TextBox = styled.div`
  text-align: left;
  font-size: 1.25rem;

  ${media.xs`
  text-align : center;
  `}
`;
const Text = styled.p``;
const IntroBox = styled.div`
  width: 15%;
  font-size: 1.25rem;

  ${media.xs`
  width : 25%;
  `}
`;
const Title = styled.h3`
  font-size: 1.5rem;
  color: ${theme("gray")};
`;
const Intro = styled.p``;
const ContentBox = styled(IntroBox)``;
const Content = styled.p``;
const SnsBox = styled.div`
  width: 20%;

  ${media.md`
  margin : 0 auto;
  width : 100%;
  text-align : center;

  &::before {
    content : "";
    display : block;
    margin : 5rem 0;
    width : 100vw;
    height : 1px;
    background : ${theme("gray")};

  }
  `}
`;
const Sns = styled.span`
  margin: 0 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    color: ${theme("green")};
  }
`;
const Corp = styled.p`
  font-size: 1.35rem;
`;
