import { User } from "@firebase/auth";
import { ErrorType } from "../components/SignUpForm/StyledSignUpForm";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "./utils";

export const errorMessage = (
  email: string,
  password: string,
  confirmPassword: string
): ErrorType => ({
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
    : "Something Went Wrong",
});

export const UserData = (user: User) => ({
  userId: user.uid,
  FriendsRequest: [],
  FriendsRequestSent: [],
  displayName:
    user.displayName || user.email!.substr(0, user.email!.indexOf("@")),
  email: user.email,
  friends: [],
  profilePic:
    user.photoURL ||
    `https://avatars.dicebear.com/api/initials/${user.email}.svg`,
  chatRooms: [],
});
