import { userProfileType } from "../Types/userType";

export interface State {
  user: userProfileType;
  selctedChatRoom: string;
  open:boolean
}

export const initialState = {
  user: {} as userProfileType,
  selctedChatRoom: "" as string,
  open: false as boolean
};
