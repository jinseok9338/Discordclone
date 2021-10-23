import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
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
  ForgotPassword,
  WantToSignUp,
} from "./StyledLoginForm";
import { ErrorType } from "../SignUpForm/StyledSignUpForm";
import { useHistory } from "react-router";
import { auth } from "../../firebase/firebase";
import useDispatch from "../../hooks/useDispatch";
import { stateContext } from "../../StateManagement/context";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// TODO Making animation and button Clckiable and loading

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLoginSubmit, error } = useAuth();

  return (
    <StyledLoginFormContainer>
      <DiscordIcon />
      <InputContainer>
        <UserIcon />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      {error && <ErrorSpan>{error.message}</ErrorSpan>}
      <StyledButton onClick={() => handleLoginSubmit(email, password)}>
        <Login>Login</Login>
      </StyledButton>
      <ForgotPassword>Forgot Password?</ForgotPassword>
      <Link to="/SignUp">
        <WantToSignUp>Want to Sign Up?</WantToSignUp>
      </Link>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
