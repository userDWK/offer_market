import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardBox from "../../components/card/CardBox";

const PurchaseMain = () => {
  const navigate = useNavigate();
  const moveRegistPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("regist");
  };
  return (
    <PurchaseBox>
      <Row>
        <CardBox type={"구매"} size={8} onclick={moveRegistPage} />
      </Row>
    </PurchaseBox>
  );
};

export default PurchaseMain;

const PurchaseBox = styled.section`
  min-height: 100rem;
`;
const Row = styled.div``;
