import { useState } from "react";
import styled from "styled-components";
import TextForm from "../../components/input/TextForm";
import { theme } from "../../styles/styleUtil";
import empty from "../../assets/images/empty.png";
export interface InputsProps {
  type: string;
  id: string;
  name: string;
  // defaultValue : string | null;
  placeholder: string;
  text: string;
  maxLength: string;
  minLength: string;
  accept: string;
}

const inputs: InputsProps[] = [
  {
    type: "text",
    id: "purchaseTitle",
    name: "purchaseTitle",
    text: "검색 시, 노출할 상품명을 입력하세요.",
    placeholder: "ex) 나이키 에어포스, 삼성 김치 냉장고",
    maxLength: "50",
    minLength: "5",
    accept: "",
  },
  {
    type: "number",
    id: "purchasePrice",
    name: "purchasePrice",
    text: "희망 구매가",
    placeholder: "ex) 20000, 300000",
    maxLength: "15",
    minLength: "2",
    accept: "",
  },
  {
    type: "file",
    id: "purchaseImg",
    name: "purchaseImg",
    text: "구매 상품 사진",
    placeholder: "",
    maxLength: "",
    minLength: "",
    accept: "image/*",
  },
];

const etcInputs: InputsProps[] = [
  {
    type: "text",
    id: "residence",
    name: "residence",
    placeholder: "ex) 부산시, 제주시 등 ",
    text: "거주지 : ",
    maxLength: "50",
    minLength: "3",
    accept: "",
  },
  {
    type: "text",
    id: "paymentMethod",
    name: "paymentMethod",
    placeholder: "ex) 선불/착불",
    text: "택배비 지불 방법 : ",
    maxLength: "15",
    minLength: "2",
    accept: "",
  },
  {
    type: "text",
    id: "capacity",
    name: "capacity",
    placeholder: "ex) 5L, 270mm",
    text: "구매 용량/사이즈",
    maxLength: "15",
    minLength: "2",
    accept: "",
  },
  {
    type: "text",
    id: "amount",
    name: "amount",
    placeholder: "ex) 3개, 5세트",
    text: "구매 개수 : ",
    maxLength: "15",
    minLength: "2",
    accept: "",
  },
];

const PurchaseRegist = () => {
  const [purchaseItem, setPurchaseItem] = useState({});
  const [purchaseImg, setPurchaseImg] = useState("");
  const [etcToggle, setEtcToggle] = useState(false);
  const [bundleToggle, setBundleToggle] = useState(false);

  const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseItem({
      ...purchaseItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.files as FileList;
    const file = target[0];
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const target = e.target as any;
      setPurchaseImg(target.result);
    };
  };

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
          {inputs.map((input, idx) => {
            const onchange = [handleInputData, handleInputData, handleImg];
            return (
              <TextForm
                onChange={onchange[idx]}
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                text={input.text}
                maxLength={input.maxLength}
                minLength={input.minLength}
                accept={input.accept}
              />
            );
          })}
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
