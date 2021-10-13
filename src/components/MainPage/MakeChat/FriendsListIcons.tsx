import React from "react";
import useMaintainState from "../../../hooks/useMaintainState";
import {
  StyledFriendsListIconsContainer,
  StyledFriendsListIconsAvatar,
} from "./StyledMakeChat";

function FriendsListIcons() {
  const { mainState } = useMaintainState();

  return (
    <StyledFriendsListIconsContainer>
      {mainState?.user?.friends && mainState?.user?.friends?.map((friend) => (
        <StyledFriendsListIconsAvatar src={friend.profilePic} />
      )) }
     
    </StyledFriendsListIconsContainer>
  );
}

export default FriendsListIcons;
