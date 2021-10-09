import { chatType } from "../Types/chatType";
import { userType } from "../Types/userType";

export enum ActionType {
    AddUser,
    AddChats,
}

export interface AddUser {
    type: ActionType.AddUser;
    payload: userType;
}

export interface AddChats {
    type: ActionType.AddChats;
    payload: chatType
}

export type StateActions = AddUser | AddChats;