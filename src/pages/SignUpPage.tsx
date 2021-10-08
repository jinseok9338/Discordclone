import styled from "styled-components";
import SignUpForm from "../components/SignUpForm/SignUpForm";

export const SignUpFormPageBackground = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;
  background: #202225;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpFormPage = () => {
  return (
    <SignUpFormPageBackground>
      <SignUpForm />
    </SignUpFormPageBackground>
  );
};

export default SignUpFormPage;
