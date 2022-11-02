import styled, { css } from "styled-components";
import { shadow, theme } from "../../styles/styleUtil";
import { InputsProps } from "../../pages/purchase/PurchaseRegist";

interface TextFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: string | any;
}

const TextForm = (props: TextFormProps) => {
  return (
    <InputBox>
      <Label htmlFor={props.id}>{props.text}</Label>
      <Input {...props} />
    </InputBox>
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
  background: none;
  border: 1px solid ${theme("gray")};
  border-radius: 4px;

  ${(props) =>
    props.id === "purchaseImg" &&
    css`
      width: 0;
      border: none;
    `}
`;
const Label = styled.label`
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
