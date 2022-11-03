import { useState } from "react";
import styled from "styled-components";
import TextForm from "../../components/input/TextForm";
import { theme } from "../../styles/styleUtil";
import empty from "../../assets/images/empty.png";

const PurchaseRegist = () => {
  const [purchaseItem, setPurchaseItem] = useState({});
  const [purchaseImg, setPurchaseImg] = useState("");
  const [etcToggle, setEtcToggle] = useState(false);
  const [bundleToggle, setBundleToggle] = useState(false);

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // setToggle((prev) => !prev);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "etc") setEtcToggle(!etcToggle);
    else if (name === "bundle") setBundleToggle(!bundleToggle);
  };

  return (
    <RegistBox>
      <Row>
        <Form>
          <TextForm
            input="inputs"
            purchaseItem={purchaseItem}
            setPurchaseItem={setPurchaseItem}
            setPurchaseImg={setPurchaseImg}
          />
          {/* // {inputs.map((input, idx) => {
          //   return (
          //     <TextForm
          //       onChange={input.onChange}
          //       type={input.type}
          //       id={input.id}
          //       name={input.name}
          //       placeholder={input.placeholder}
          //       text={input.text}
          //       maxLength={input.maxLength}
          //       minLength={input.minLength}
          //       accept={input.accept}
          //     />
          //   );
          // })} */}
          <Figure>
            <ItemImg
              className="hide"
              //   className={(imgToggle && "hide").toString()}
              src={
                purchaseImg ? purchaseImg : empty
                // location ? empty : selectProduct.img
              }
            />
            <Canvas id="canvas" />
          </Figure>
        </Form>
      </Row>
    </RegistBox>
  );
};

export default PurchaseRegist;

const RegistBox = styled.section``;
const Row = styled.div`
  margin: 10rem auto;
  width: 60rem;
  min-height: 80rem;
  border: solid 1px ${theme("gray")};
`;
const Form = styled.form`
  width: 90%;
  margin: 0 auto;
`;

const Figure = styled.figure`
  position: relative;
  text-align: center;
  margin-top: 2rem auto;
`;
const ItemImg = styled.img`
  min-width: 12rem;
  max-width: 25rem;
  min-height: 12rem;
  max-height: 25rem;
  /* .hide {
      display : none;
    } */
`;
const Canvas = styled.canvas``;
