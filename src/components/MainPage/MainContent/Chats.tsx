import styled from "styled-components";

import ChatsInput from "./ChatsInput";
import MeChat from "./MeChat";
import OtherPersonChat from "./OtherPersonChat";

// TODO Day container calculate the day
export const StyledChatsContainer = styled.div`
  width: 1190px;
  border-right: solid 1px rgb(226, 226, 226, 0.3);
  background-color: #36393f;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b8b7b6;
  }
`;

const DayContainer = styled.div`
  width: 114px;
  top: 1rem;
  position: relative;
  height: 26px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
`;

const DayContainerP = styled.p`
  color: white;
  font-size: 1rem;
`;

const EmptyContainer = styled.div`
  width: 1190px;
  padding: 1rem;
`;

// This is all the chats that are queried from the firestore

const Chats = () => {
 

  return (
    <StyledChatsContainer>
      <ChatsInput chatId={"akkk"} />
            <MeChat />
            <OtherPersonChat />
      <OtherPersonChat />
      <DayContainer>
        <DayContainerP>Today</DayContainerP>
      </DayContainer>
      <EmptyContainer />
    </StyledChatsContainer>
  );
};

export default Chats;
