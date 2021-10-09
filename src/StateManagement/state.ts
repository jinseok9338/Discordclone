import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";


export interface State {
    user: userProfileType;
    chats: chatType[]
}


export const initialState = {
    user: {} as userProfileType,
    chats: [] as chatType[]
};