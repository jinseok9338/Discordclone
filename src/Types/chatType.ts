import { userType } from "./userType";

export type chatType = {
    chatId: string;
    users: userType[]
    chats: [
        {
            user: userType;
            message: string;
            sent: Date;
        }
    ]
}