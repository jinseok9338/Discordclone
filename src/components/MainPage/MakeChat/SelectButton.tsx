import React from "react";
import useSelected from "../../../hooks/useSelected";
import { userType } from "../../../Types/userType";
import { StyledSelectButton, StyledSelectButtonContainer } from "./StyledMakeChat";
function SelectButton() {

  const { selected } = useSelected()

  const MakeChatRoom = (selected: userType[]) => {
  // Firestore and make a chat room
  // setChatroomId dispatch to set the selected ChatRoomId to the newly created room
    // Close the pop up menu 
}

  return (
    <StyledSelectButtonContainer>
      <StyledSelectButton onClick={() => MakeChatRoom(selected)} >Make a chat</StyledSelectButton>
    </StyledSelectButtonContainer>);
}

export default SelectButton;
