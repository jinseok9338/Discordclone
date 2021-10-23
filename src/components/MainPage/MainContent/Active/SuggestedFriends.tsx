import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
import { userType } from "../../../../Types/userType";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebase";

import { useState } from "react";
import { toggleFriends } from "./suggestedFriendsFunction";

export const StyledSuggestedFriendsContainer = styled.div`
  width: 417px;
  height: fit-content;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #3d3e42;
  display: flex;
  align-items: center;
`;

const StyledSuggestedFriendsAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 1rem;
`;

const StyledSuggestedFriendsToggleButton = styled.button`
  margin-left: 1rem;
  width: 100px;
  height: 30px;
  border-radius: 18px;
  background-color: #013a70;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: transparent;
    border-color: #fff;
    transition: all 0.1s ease-in-out;
  }
  margin-left: auto;
  margin-right: 1rem;
`;

const StyledSuggestedFriendsName = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-left: 1rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
`;
const StyledSuggestedFriendId = styled.p`
  font-size: 0.9rem;
  margin: 0;
  margin-left: 1rem;
  margin-bottom: 0.2rem;
  font-weight: 400;
`;

interface suggestedUserType {
  user: userType;
}

function SuggestedFriends({ user }: suggestedUserType) {
  const { mainState } = useMaintainState();
  const [sent, setSent] = useState(false);

  // Subscribe to the firestore and update it directly ... Make it as a hook then

  return (
    <StyledSuggestedFriendsContainer>
      <StyledSuggestedFriendsAvatar src={user?.profilePic} alt="profile" />
      <StyledSuggestedFriendsName>
        {user?.displayName}
      </StyledSuggestedFriendsName>
      <StyledSuggestedFriendId>{`#${user?.userId.slice(
        0,
        7
      )}`}</StyledSuggestedFriendId>
      <StyledSuggestedFriendsToggleButton onClick={() => toggleFriends(user)}>
        {!sent ? "Add" : "Pending"}
      </StyledSuggestedFriendsToggleButton>
    </StyledSuggestedFriendsContainer>
  );
}

export default SuggestedFriends;
