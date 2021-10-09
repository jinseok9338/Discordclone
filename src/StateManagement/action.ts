import { chatType } from "../Types/chatType";
import { userType } from "../Types/userType";

export enum ActionType {
    SetUser,
}

export interface SetUser {
    type: ActionType.SetUser;
    payload: string;
}

// export interface AddChats {
//     type: ActionType.AddChats;
//     payload: chatType
// }

export type StateActions = SetUser 