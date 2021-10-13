import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";

export enum ActionType {
  SetUser,
  RetrieveState,
}

export interface SetUser {
  type: "SET_USER";
  payload: userProfileType;
}

export interface SetChatRoom {
  type: "SET_CHATROOM";
  payload: string;
}

export type StateActions = SetUser | SetChatRoom;
