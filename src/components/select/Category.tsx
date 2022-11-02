import styled, { css } from "styled-components";

interface CategoryProps {
  className: string;
  onChange: () => void;
}

const option = [
  { value: "all", text: "전체" },
  { value: "woman", text: "여성패션" },
  { value: "man", text: "남성패션" },
  { value: "child", text: "유아동패션" },
  { value: "brand", text: "명품관" },
  { value: "shoes", text: "신발" },
  { value: "beauty", text: "뷰티" },
  { value: "birth", text: "출산" },
  { value: "food", text: "식품" },
  { value: "kitchen", text: "주방용품" },
  { value: "daily", text: "생활용품" },
  { value: "sports", text: "스포츠/레저" },
  { value: "car", text: "자동차용품" },
  { value: "book", text: "도서/음반/DVD" },
  { value: "health", text: "헬스/건강식품" },
  { value: "tour", text: "여행" },
  { value: "animal", text: "반려동물용품" },
  { value: "stationery", text: "문구/완구/오피스" },
  { value: "etc", text: "기타" },
];

const Category = (props: CategoryProps) => {
  return (
    <CategorySelect
      name="category"
      className={props.className}
      onChange={props.onChange}
    >
      {option.map((opt) => {
        return (
          <Option key={opt.value} value={opt.value}>
            {opt.text}
          </Option>
        );
      })}
    </CategorySelect>
  );
};

export default Category;

const CategorySelect = styled.select`
  ${(props) =>
    props.className === "header" &&
    css`
      width: 25%;
      height: 100%;
      border-top-left-radius: 0.8rem;
      border-bottom-left-radius: 0.8rem;
      border: 2px solid rgba(50, 50, 50, 0.4);
    `}
`;

const Option = styled.option``;
