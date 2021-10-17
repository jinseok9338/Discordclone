import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
import { userType } from "../../../../Types/userType";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebase";

import { useState } from "react";



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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 1rem;
`;

const StyledSuggestedFriendsToggleButton = styled.button`
margin-left:1rem;
  width: 100px;
  height: 30px;
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
font-size: 1.2rem;
margin:0;
margin-left: 1rem;
margin-bottom:0.2rem;
font-weight: 600;
`
const StyledSuggestedFriendId = styled.p`
font-size: 0.9rem;
margin:0;
margin-left: 1rem;
margin-bottom:0.2rem;
font-weight: 400;
`


interface suggestedUserType{
    user: userType
}

function SuggestedFriends({user}:suggestedUserType) {
    const { mainState } = useMaintainState()
    const [sent, setSent] = useState(false)


    // Subscribe to the firestore and update it directly ... Make it as a hook then 
    
    
    const toggleFriends = async(user: userType) => {
        const FriendsListRef = doc(firestore, "users", mainState?.user?.userId);
        const requestSentRef = doc(firestore, "users", user?.userId);
      if (mainState?.user?.FriendsRequestSent?.filter((requestedFriend)=> requestedFriend.userId === user?.userId ).length > 0) {
        console.log(mainState?.user?.FriendsRequestSent?.filter((requestedFriend)=> requestedFriend.userId === user?.userId ))
            await updateDoc(FriendsListRef, {
                FriendsRequestSent: arrayUnion(user)
            });
            await updateDoc(requestSentRef,{
              FriendsRequest: arrayUnion(
                {
                    userId: mainState?.user?.userId,
                    profilePic: mainState?.user?.profilePic,
                    displayName: mainState?.user?.displayName
                  }
                )              
            })
        // Not updating the MainState Friends request Tonight
            setSent(true)
            console.log("Sent")
        } else {
            await updateDoc(FriendsListRef, {
                FriendsRequestSent: arrayRemove(user)
            });
          await updateDoc(requestSentRef, {
            FriendsRequest: arrayRemove(
              {
                userId: mainState?.user?.userId,
                profilePic: mainState?.user?.profilePic,
                displayName: mainState?.user?.displayName
              }
            )
          })
          setSent(false)
           console.log("Unsent")
        }
    }

     
    return (
       
            
        <StyledSuggestedFriendsContainer>
                <StyledSuggestedFriendsAvatar src={user?.profilePic} alt="profile" />
        <StyledSuggestedFriendsName>{user?.displayName}</StyledSuggestedFriendsName>
        <StyledSuggestedFriendId>{`#${user?.userId.slice(0,7)}`}</StyledSuggestedFriendId>
                <StyledSuggestedFriendsToggleButton onClick={() => toggleFriends(user)}>{!sent? "Add":"Pending" }</StyledSuggestedFriendsToggleButton>
        </StyledSuggestedFriendsContainer>
  
    )
}

export default SuggestedFriends

