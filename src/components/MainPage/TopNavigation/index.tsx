import { StyledTopNavigation } from "./StyledTopNavigation";
import TopbarBox from "./TopbarBox";
import TopbarConversation from "./TopbarConversation";

const TopNavigation = () => {
  return (
    <StyledTopNavigation>
      <TopbarConversation />
      <TopbarBox />
    </StyledTopNavigation>
  );
};

export default TopNavigation;
