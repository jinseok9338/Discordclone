import Active from "./Active/index";
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
