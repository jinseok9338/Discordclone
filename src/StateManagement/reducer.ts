import { userProfileType } from "../Types/userType";
import { ActionType, StateActions } from "./action";
import { State } from "./state";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

//TODO Making Dispatch for the chats and user


export const stateReducer = async (state: State, action: StateActions): Promise<State> => {
    
    switch (action.type) {
        case ActionType.SetUser:
            
            const userId = action.payload as string
            const docRef = doc(firestore, "users", userId);
            const DocumentSnapshot = await getDoc(docRef)
            if (DocumentSnapshot.exists()) {
                const { FriendsRequest, FriendsRequestSent, displayName, email, friends, profilePic, userId } = DocumentSnapshot.data() as userProfileType
                const newState = {
                    ...state,
                    user: { FriendsRequest, FriendsRequestSent, displayName, email, friends, profilePic, userId } as userProfileType,

                }
                return newState
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

