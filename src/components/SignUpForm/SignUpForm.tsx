import { Link } from "react-router-dom";

import {
  StyledLoginFormContainer,
  DiscordIcon,
  InputContainer,
  UserIcon,
  Input,
  PasswordIcon,
  ErrorSpan,
  StyledButton,
  Login,
  WantToSignUp,
} from "./StyledSignUpForm";

import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { handleSignUpSubmit, error } = useAuth();

  return (
    <StyledLoginFormContainer>
      <DiscordIcon />
      <InputContainer>
        <UserIcon />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <PasswordIcon />
        <Input
          placeholder="PassWord"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <PasswordIcon />
        <Input
          placeholder="Confirm PassWord"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputContainer>
      {error && <ErrorSpan>{error.message}</ErrorSpan>}
      <StyledButton
        onClick={async (e) => {
          e.preventDefault(); // Might not necessary because it is not a form
          await handleSignUpSubmit(email, password, confirmPassword);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }}
      >
        <Login>SignUp</Login>
      </StyledButton>
      <Link to="/Login">
        <WantToSignUp>Already Have an Account?</WantToSignUp>
      </Link>
    </StyledLoginFormContainer>
  );
};

export default SignUpForm;
