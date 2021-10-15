import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
import { userType } from "../../../../Types/userType";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebase";

import { useState } from "react";

const StyledFriendsListTitle = styled.h1`

`

export const StyledSuggestedFriendsContainer = styled.div`
  width: 417px;
  height: fit-content;
  padding-top:1rem;
  padding-bottom:1rem;
  background-color: #3d3e42;
  display:flex;
  align-items: center;
`;

const StyledSuggestedFriendsAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-left: 1rem;
`;

const StyledSuggestedFriendsToggleButton = styled.button`
margin-left:1rem;
  width: 120px;
  height: 35px;
   border-radius: 18px;
  background-color: #013a70;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover {
    background-color: transparent;
    border-color: #fff;
    transition: all .1s ease-in-out;
  }
  margin-left:auto;
  margin-right:1rem;
`

const StyledSuggestedFriendsName = styled.p`
font-size: 1.4rem;
margin:0;
margin-left: 1rem;
font-weight: 600;
`

interface suggestedUserType{
    user: userType
}

function SuggestedFriends({user}:suggestedUserType) {
    const { mainState } = useMaintainState()
    const [sent, setSent] = useState(false)

    
    
    const toggleFriends = async(user: userType) => {
        const FriendsListRef = doc(firestore, "users", mainState?.user?.userId);
        if (mainState?.user?.friends?.includes(user)) {
            // Atomically add a new region to the "regions" array field.
            await updateDoc(FriendsListRef, {
                friends: arrayUnion(user)
            });
            setSent(true)
        } else {
            // Atomically remove a region from the "regions" array field.
            await updateDoc(FriendsListRef, {
                friends: arrayRemove(user)
            });
            setSent(false)
        }
    }

    
    return (
        <>
            <StyledFriendsListTitle>Suggested Friends</StyledFriendsListTitle>
        <StyledSuggestedFriendsContainer>
                <StyledSuggestedFriendsAvatar src={user?.profilePic} alt="profile" />
                <StyledSuggestedFriendsName>{user?.displayName}</StyledSuggestedFriendsName>
                <StyledSuggestedFriendsToggleButton onClick={() => toggleFriends(user)}>{!sent? "Add":"Pending" }</StyledSuggestedFriendsToggleButton>
        </StyledSuggestedFriendsContainer>
        </>
    )
}

export default SuggestedFriends

