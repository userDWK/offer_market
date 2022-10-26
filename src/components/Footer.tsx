import {
  faFacebookF,
  faInstagram,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/header.jpg";

interface SnsProps {
  icon: IconDefinition;
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
  { icon: faFacebookF },
  { icon: faInstagram },
  { icon: faYoutube },
];

function Footer(): JSX.Element {
  return (
    <FooterBox>
      <Row>
        <CompanyBox>
          <LogoBox>
            <Logo src={logo} alt="footer logo img"></Logo>
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
          <Sns>
            {sns.map((icon, i) => {
              return <FontAwesomeIcon key={i} icon={icon.icon} />;
            })}
          </Sns>
          <Corp>© OFFERMARKET Corp</Corp>
        </SnsBox>
      </Row>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.footer``;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
const CompanyBox = styled.div``;
const LogoBox = styled.div``;
const Logo = styled.img``;
const TextBox = styled.div``;
const Text = styled.p``;
const IntroBox = styled.div``;
const Title = styled.h3``;
const Intro = styled.p``;
const ContentBox = styled.div``;
const Content = styled.p``;
const SnsBox = styled.div``;
const Sns = styled.p``;
const Corp = styled.p``;
