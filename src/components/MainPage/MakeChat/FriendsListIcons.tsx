import React, { useState } from "react";
import useMaintainState from "../../../hooks/useMaintainState";
import { userType } from "../../../Types/userType";
import FriendsListIconAvatars from "./FriendsListIconAvatars";
import {
  StyledFriendsListIconsContainer,
  StyledFriendsListIconsAvatar,
} from "./StyledMakeChat";

function FriendsListIcons() {
  const { mainState } = useMaintainState();
  const [selected, setSelected] = useState([] as userType[]);
  

  const toggleSelected = (friend:userType) => {
  // if the user is already selected remove from the array
    if(!selected.find(item => item.userId === friend.userId)){
      setSelected([...selected, friend])
    } else {
      // if the user is not selected add to the array
      const newArray = selected.filter(item => item.userId !== friend.userId)
      setSelected(newArray);
    }
    
  }
  
  const friend = {
    displayName: "jinseok",
    profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  userId:"adasdasdasdasd"} as userType


  console.log(selected)
  
  

  return (
    <StyledFriendsListIconsContainer>
      {mainState?.user?.friends && mainState?.user?.friends?.map((friend) => (
        <div onClick={() => toggleSelected(friend)}>
          <FriendsListIconAvatars src={friend.profilePic} displayName={friend.displayName} selected={!!selected.find(item => item.userId === friend.userId)} />
        </div>
      ))}
      <div onClick={() => toggleSelected(friend)}>
        <FriendsListIconAvatars src={friend.profilePic} displayName={friend.displayName} selected={!!selected.find(item => item.userId === friend.userId)} />
      </div>
    </StyledFriendsListIconsContainer>
  );
}

export default FriendsListIcons;
