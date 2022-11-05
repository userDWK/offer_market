import styled, { css } from "styled-components";
import { shadow, theme } from "../../styles/styleUtil";

import { InputsProps, TextFormProps } from "../../type/interfaces";

const TextForm = ({ inputKey, handleImg, handleInputData }: TextFormProps) => {
  const inputs: InputsProps = {
    inputs: [
      {
        onChange: handleInputData,
        type: "text",
        id: "purchaseTitle",
        name: "purchaseTitle",
        text: "검색 시, 노출할 상품명을 입력하세요.",
        placeholder: "ex) 나이키 에어포스, 삼성 김치 냉장고",
        maxLength: 50,
        minLength: 5,
      },
      {
        onChange: handleInputData,
        type: "number",
        id: "purchasePrice",
        name: "purchasePrice",
        text: "희망 구매가",
        placeholder: "ex) 20000, 300000",
        maxLength: 15,
        minLength: 2,
      },
      {
        onChange: handleImg,
        type: "file",
        id: "purchaseImg",
        name: "purchaseImg",
        text: "구매 상품 사진",
        accept: "image/*",
      },
    ],
    etcInputs: [
      {
        onChange: handleInputData,
        type: "text",
        id: "residence",
        name: "residence",
        placeholder: "ex) 부산시, 제주시 등 ",
        text: "거주지 : ",
        maxLength: 50,
        minLength: 3,
      },
      {
        onChange: handleInputData,
        type: "text",
        id: "paymentMethod",
        name: "paymentMethod",
        placeholder: "ex) 선불/착불",
        text: "택배비 지불 방법 : ",
        maxLength: 15,
        minLength: 2,
      },
      {
        onChange: handleInputData,
        type: "text",
        id: "capacity",
        name: "capacity",
        placeholder: "ex) 5L, 270mm",
        text: "구매 용량/사이즈",
        maxLength: 15,
        minLength: 2,
      },
      {
        onChange: handleInputData,
        type: "text",
        id: "amount",
        name: "amount",
        placeholder: "ex) 3개, 5세트",
        text: "구매 개수 : ",
        maxLength: 15,
        minLength: 2,
      },
    ],
  };

  return (
    <>
      {inputKey &&
        inputs[inputKey].map((item) => {
          return (
            <InputBox key={item.id}>
              <Label htmlFor={item.id}>{item.text}</Label>
              <Input
                onChange={item.onChange}
                type={item.type}
                id={item.id}
                name={item.name}
                placeholder={item.placeholder}
                maxLength={item.maxLength}
                minLength={item.minLength}
                accept={item.accept}
              />
            </InputBox>
          );
        })}
    </>
  );
};

export default TextForm;

const InputBox = styled.div`
  width: 100%;
  margin: 3.5rem auto 0;
`;
const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  background: white;
  border: 1px solid ${theme("gray")};
  border-radius: 4px;

  ${(props) =>
    props.id === "purchaseImg" &&
    css`
      width: 0;
      border: none;
    `}
`;
export const Label = styled.label`
  display: block;
  height: 1.75rem;
  margin-bottom: 1rem;
  color: #111;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  opacity: 0.8;
  overflow: hidden;

  ${(props) =>
    props.htmlFor === "purchaseImg" &&
    css`
      width: 18rem;
      height: 5rem;
      border-radius: 3rem;
      font-size: 1.5rem;
      line-height: 3.25;
      text-align: center;
      background: rgb(240, 150, 240);

      &:hover {
        background: rgb(230, 120, 220);
        opacity: 1;
      }

      &:active {
        color: white;
        ${shadow(1)};
      }
    `}

  ${(props) =>
    props.htmlFor === "sellPrice" &&
    css`
      margin-left: 16.5%;
    `}
`;
