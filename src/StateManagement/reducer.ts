import { userProfileType } from "../Types/userType";
import { ActionType, StateActions } from "./action";
import { State } from "./state";


//TODO Making Dispatch for the chats and user


export const stateReducer =  (state: State, action: StateActions): State => {
    
    switch (action.type) {
        case ActionType.SetUser:
            const user = action.payload;
            return {...state, user}
          

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

// export const AddChats = (chat: chatType) => ({
//     type: ActionType.AddChats,
//     payload: chat,
// });

