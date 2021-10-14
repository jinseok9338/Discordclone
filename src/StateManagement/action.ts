import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";

export enum ActionType {
  SetUser,
  SetChatRoom,
  OpenMakeChat
}

export interface SetUser {
  type: "SET_USER";
  payload: userProfileType;
}

export interface SetChatRoom {
  type: "SET_CHATROOM";
  payload: string;
}

export interface OpenMakeChat {
  type: "OPEN_MAKECHAT";
  payload:boolean
}



export type StateActions = SetUser | SetChatRoom | OpenMakeChat;
