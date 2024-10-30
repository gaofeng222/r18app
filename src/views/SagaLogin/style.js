import styled from "styled-components";
import bg from "./image.png";
export const LoginContainer = styled.div`
  height: 100vh;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  .main {
    background: rgba(255, 255, 255, 0.5);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      margin-bottom: 20px;
      font-size: 0.48rem;
    }
    form {
      width: 60%;
    }
  }
`;
