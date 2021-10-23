import { userProfileType } from "../Types/userType";
import { StateActions } from "./action";
import { State } from "./state";

export const stateReducer = (state: State, action: StateActions): State => {
  switch (action.type) {
    case "SET_USER":
      const user = action.payload;
      return { ...state, user };

    case "SET_CHATROOM":
      const chatRoomId = action.payload;
      return { ...state, selctedChatRoom: chatRoomId };
    case "OPEN_MAKECHAT":
      const open = action.payload;
      return { ...state, open };
    default:
      return state;
  }
};

// helper functions to simplify the caller
export const SetUser = (user: userProfileType) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const SetChatRoom = (chatRoomId: string) => {
  return {
    type: "SET_CHATROOM",
    payload: chatRoomId,
  };
};

export const OpenMakeChat = (open: boolean) => {
  return {
    type: "OPEN_MAKECHAT",
    payload: open,
  };
};
