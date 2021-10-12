import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";


export interface State {
    user: userProfileType;
    selctedChatRoom: string
}


export const initialState = {
    user: {} as userProfileType,
    selctedChatRoom: "" as string
};