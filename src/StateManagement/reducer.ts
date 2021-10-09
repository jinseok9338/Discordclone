import { UserProfile } from "@firebase/auth";
import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { ActionType, StateActions } from "./action";
import { State } from "./state";

//TODO Making Dispatch for the chats and user

export function stateReducer(state: State, action: StateActions): State {
    switch (action.type) {
        // case ActionType.AddUser:
        //     return {
        //         // Firebase auth and firestore
        //         user: {} };
        // case ActionType.AddChats:
        //         // Firebse add Chats 

        //     return {
        
        //     };

        default:
            return state;
    }
}


// helper functions to simplify the caller
export const AddUser = (user: userProfileType) => {
    return ({
        type: ActionType.AddUser,
        payload: user,
    })
};

export const AddChats = (chat: chatType) => ({
    type: ActionType.AddChats,
    payload: chat,
});

