import FriendsListIcons from "./FriendsListIcons";
import SearchBar from "./SearchBar";
import SelectButton from "./SelectButton";
import { StyledMakeChat } from "./StyledMakeChat";

const MakeChat = () => {
  return (
    <StyledMakeChat>
      <SearchBar />
      <FriendsListIcons />
      <SelectButton  />
    </StyledMakeChat>
  );
};

export default MakeChat;
