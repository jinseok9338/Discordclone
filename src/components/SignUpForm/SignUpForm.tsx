import { useHistory } from "react-router-dom";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../../utils/utils";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import {
  ErrorType,
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
// TODO Making Loading spinner and better transition : When making animation
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { userProfileType } from "../../Types/userType";
import { useState } from "react";
import useDispatch from "../../hooks/useDispatch";

const SignUpForm = () => {
  const { SetUserFunction } = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({} as ErrorType);
  const auth = getAuth();

  const history = useHistory();

  const handleSubmit = async (
    auth: Auth,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(password, confirmPassword)
    ) {
      setError({} as ErrorType);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (UserCredential) => {
          const user = UserCredential.user;
          let data = {
            userId: user.uid,
            FriendsRequest: [],
            FriendsRequestSent: [],
            displayName:
              user.displayName ||
              user.email!.substr(0, user.email!.indexOf("@")),
            email: user.email,
            friends: [],
            profilePic:
              user.photoURL ||
              `https://avatars.dicebear.com/api/initials/${user.email}.svg`,
            chatRooms: [],
          } as userProfileType;
          await setDoc(doc(firestore, "users", user.uid), data);
          SetUserFunction(user.uid);
          alert("user Created");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setError({} as ErrorType);
          history.push("/main");
        })
        .catch((error) => {
          setError({
            errorType: "other",
            message: error.message,
          });
        });
    }
    setError({
      errorType: !validateEmail(email)
        ? "email"
        : !validatePassword(password)
        ? "password"
        : !validateConfirmPassword(password, confirmPassword)
        ? "confirmPassword"
        : "other",
      message: !validateEmail(email)
        ? "Non-valid Email"
        : !validatePassword(password)
        ? "Non-valid Password"
        : !validateConfirmPassword(password, confirmPassword)
        ? "Check Confirm Password Again"
        : error?.message!,
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
        onClick={(e) => {
          e.preventDefault(); // Might not necessary because it is not a form
          handleSubmit(auth, email, password, confirmPassword);
        }}
      >
        <Login>SignUp</Login>
      </StyledButton>
      <WantToSignUp>Already Have an Account?</WantToSignUp>
    </StyledLoginFormContainer>
  );
};

export default SignUpForm;
