import useMaintainState from "../../../hooks/useMaintainState";
import useSelected from "../../../hooks/useSelected";
import FriendsListIconAvatars from "./FriendsListIconAvatars";
import {
  StyledFriendsListIconsContainer
} from "./StyledMakeChat";

function FriendsListIcons() {
  const { mainState } = useMaintainState();
  const {toggleSelected,selected } = useSelected()
  

  return (
    <StyledFriendsListIconsContainer>
      {mainState?.user?.friends && mainState?.user?.friends?.map((friend) => (
        <div onClick={() => toggleSelected(friend)}>
          <FriendsListIconAvatars src={friend.profilePic} displayName={friend.displayName} selected={!!selected.find(item => item.userId === friend.userId)} />
        </div>
      ))}
     
    </StyledFriendsListIconsContainer>
  );
}

export default FriendsListIcons;
