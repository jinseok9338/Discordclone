import React from "react";
import Active from "./Active";
import Chats from "./Chats";
import { StyledMainContent } from "./StyledMainContent";

function MainContent() {

// TODO need to make hook that forks chatId and automatically add the chats to the chats state ... This is brilliant  
  return (
    <StyledMainContent>
      <Chats chatId={""}/>
      <Active />
    </StyledMainContent>
  );
}

export default MainContent;
