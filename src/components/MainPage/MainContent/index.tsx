import Active from "./Active";
import Chats from "./Chats";
import { StyledMainContent } from "./StyledMainContent";

function MainContent() {
  return (
    <StyledMainContent>
      <Chats />
      <Active />
    </StyledMainContent>
  );
}

export default MainContent;
