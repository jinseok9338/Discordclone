import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { ActionType, StateActions } from "./action";
import { State } from "./state";




export const stateReducer =  (state: State, action: StateActions): State => {
    
    switch (action.type) {
        case "SET_USER":
            const user = action.payload;
            return {...state, user}
          
        case "SET_CHATROOM":
            const chatRoomId = action.payload 
            return {...state, selctedChatRoom:chatRoomId}
        
        default:
            
            return state;
           
            
    }
   
}



// helper functions to simplify the caller
export const SetUser = (user: userProfileType) => {
    return ({
        type: ActionType.SetUser,
        payload: user,
    })
};

export const RetrieveState = (state: {
    user: userProfileType,
    chats: chatType[]
}) => ({
    type: ActionType.RetrieveState,
    payload: state,
});

