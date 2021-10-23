import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ErrorType } from "../components/SignUpForm/StyledSignUpForm";
import { firestore } from "../firebase/firebase";
import { errorMessage, UserData } from "../utils/SignUpUtils";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/utils";

const useUserFunc = () => {
  const history = useHistory();
  const [error, setError] = useState({} as ErrorType);

  const handleLoginSubmit = async (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        // Signed in
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

  const handleSignUpSubmit = async (
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
          await setDoc(doc(firestore, "users", user.uid), UserData(user));
          // We do not set global state with dispatch and state
          alert("user Created");
          setError({} as ErrorType);
          history.push("/");
        })
        .catch((error) => {
          setError({
            errorType: "other",
            message: error.message,
          });
        });
    }
    setError(() => errorMessage(email, password, confirmPassword));
  };

  return {
    handleLoginSubmit,
    handleSignUpSubmit,
    error,
  };
};

export default useUserFunc;
