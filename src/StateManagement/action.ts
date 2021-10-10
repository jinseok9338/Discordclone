import { chatType } from "../Types/chatType";
import { userProfileType, userType } from "../Types/userType";

export enum ActionType {
    SetUser,
}

export interface SetUser {
    type: ActionType.SetUser;
    payload: userProfileType;
}

// export interface AddChats {
//     type: ActionType.AddChats;
//     payload: chatType
// }

export type StateActions = SetUser 