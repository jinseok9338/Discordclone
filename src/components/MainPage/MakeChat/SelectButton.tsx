import {
  StyledSelectButton,
  StyledSelectButtonContainer,
} from "./StyledMakeChat";

function SelectButton() {
  // const MakeChatRoom = async (selected: userType[]) => {
  //   const chatId = uuidv4();
  //   const createChatData = {
  //     chatId,
  //     chats: [] as {
  //       user: userType;
  //       message: string;
  //       sent: Date;
  //     }[],
  //     users: [
  //       ...selected,
  //       {
  //         userId: mainState?.user?.userId,
  //         profilePic: mainState?.user?.profilePic,
  //         displayName: mainState?.user?.displayName,
  //       },
  //     ],
  //   } as chatType;

  //   try {
  //     await setDoc(doc(firestore, "chats", chatId), createChatData);
  //     const docRef = doc(firestore, "users", mainState?.user?.userId);
  //     await updateDoc(docRef, {
  //       chatRooms: arrayUnion(chatId),
  //     });
  //     dispatch({ type: "OPEN_MAKECHAT", payload: false });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <StyledSelectButtonContainer>
      <StyledSelectButton>Make a chat</StyledSelectButton>
    </StyledSelectButtonContainer>
  );
}

export default SelectButton;
