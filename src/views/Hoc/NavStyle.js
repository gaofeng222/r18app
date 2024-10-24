import styled from "styled-components";

export const NavBox = styled.div`
  padding: 10px;
  background-color: #f1f3f5;
  border-bottom: 1px solid #e6ecf0;
  width: 300px;
  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: red;
    &:hover {
      color: blue;
    }
  }
`;
export const NavBarBox = styled.div`
  line-height: 40px;
  display: flex;
  flex-direction: column;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export const NewButton = styled(Button).attrs((props) => ({
  className: "bg-color",
}))`
  color: tomato;
  border: 2px solid tomato;
  &:hover {
    background: tomato;
    color: white;
    cursor: pointer;
  }
`;

export const MyStyledComponent = styled(NewButton)`
  &&& {
    color: #bf4f74;
    font-weight: bold;
  }
`;
