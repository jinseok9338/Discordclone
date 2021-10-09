import { UserProfile } from "@firebase/auth";
import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { ActionType, StateActions } from "./action";
import { State } from "./state";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

//TODO Making Dispatch for the chats and user

export async function stateReducer(state: State, action: StateActions): Promise<State> {
    switch (action.type) {
        case ActionType.SetUser:
            const userId = action.payload
            const docRef = doc(firestore, "users", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const {FriendsRequest,FriendsRequestSent,displayName,email,friends,profilePic,userId} = docSnap.data() as userProfileType
                return {
                    user: { FriendsRequest, FriendsRequestSent, displayName, email, friends, profilePic, userId },
                    chats: state.chats
                };
            }
            break;


        default:
            return state;
    }
    return state
}


// helper functions to simplify the caller
export const SetUser = (userId: string) => {
    return ({
        type: ActionType.SetUser,
        payload: userId,
    })
};

// export const AddChats = (chat: chatType) => ({
//     type: ActionType.AddChats,
//     payload: chat,
// });

