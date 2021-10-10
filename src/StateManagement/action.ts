import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";


export enum ActionType {
    SetUser,
    RetrieveState
}

export interface SetUser {
    type: "SET_USER"
    payload: userProfileType;
}

export interface RetrieveState {
    type: "RETRIEVE_STATE"
    payload: {
        user: userProfileType,
        chats:chatType[]
    }
}

export type StateActions = SetUser | RetrieveState