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

// TODO Making animation and button Clckiable and loading

const LoginForm = () => {
  const [error, setError] = useState({} as ErrorType);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SetUserFunction } = useDispatch();
  const { state } = useContext(stateContext);

  console.log(state);

  const history = useHistory();

  const handleSubmit = (auth: Auth, email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const userId = userCredential.user.uid;
        await SetUserFunction(userId);
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError({
          errorType: "other",
          message: errorMessage,
        });
      });
  };
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
      <StyledButton onClick={() => handleSubmit(auth, email, password)}>
        <Login>Login</Login>
      </StyledButton>
      <ForgotPassword>Forgot Password?</ForgotPassword>
      <Link to="/SignUp">
      <WantToSignUp>Want to Sign Up?</WantToSignUp></Link>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
