import React, { useContext } from "react";
import useSelected from "../../../hooks/useSelected";
import { userType } from "../../../Types/userType";
import { StyledSelectButton, StyledSelectButtonContainer } from "./StyledMakeChat";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { chatType } from "../../../Types/chatType";
import useMaintainState from "../../../hooks/useMaintainState";
import { OpenMakeChat } from "../../../StateManagement/reducer";
import { stateContext } from "../../../StateManagement/context";


function SelectButton() {

  const { selected } = useSelected()
  const { mainState } = useMaintainState()
  const { state, dispatch } = useContext(stateContext);
console.log(state.open)

  const MakeChatRoom = async (selected: userType[]) => {
  
    
    const chatId = uuidv4()
    const createChatData = {
      chatId,
      chats: [] as {
        user: userType;
        message: string;
        sent: Date;
      }[],
      users: [...selected, {
        userId: mainState?.user?.userId,
        profilePic: mainState?.user?.profilePic,
        displayName: mainState?.user?.displayName}]
    } as chatType

    try {

      await setDoc(doc(firestore, "chats", chatId ), createChatData);
      const docRef = doc(firestore, 'users', mainState?.user?.userId);
      await updateDoc(docRef, {
        chatRooms: arrayUnion(chatId)
        
      })
      dispatch({ type: "OPEN_MAKECHAT", payload: false })

    } catch (e) {
      console.log(e)
    }

}

  return (
    <StyledSelectButtonContainer>
      <StyledSelectButton onClick={() => MakeChatRoom(selected) }   >Make a chat</StyledSelectButton>
    </StyledSelectButtonContainer>);
}

export default SelectButton;
