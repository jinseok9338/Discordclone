import styled from "styled-components";
import LoginForm from "../components/LoginPage/LoginForm";

export const LoginPageBackground = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;
  background: #202225;
  display:flex;
  justify-content: center;
  align-items: center;
`;




const LoginPage = () => {
    return (
      <LoginPageBackground>
        <LoginForm/>
      </LoginPageBackground>
    )

}

export default LoginPage