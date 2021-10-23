import styled from "styled-components";

import SuggestedFriends from "./SuggestedFriends";
import { useState } from "react";
import { userType } from "../../../../Types/userType";

import { useAuth } from "../../../../hooks/useAuth";


export const StyledActiveContainer = styled.div`
  width: 417px;
  height: 1008px;
  background-color: #36393f;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const StyledFriendsListTitle = styled.h1`

`



const Active = () => {
  // Make subscribe to the suggestedFriends List data from firestore 
  const [suggestedFriends, setSuggestedFriends] = useState<userType[]>([])
  const { currentUserProfile } = useAuth()
  
  return <StyledActiveContainer>
    <StyledFriendsListTitle>Suggested Friends</StyledFriendsListTitle>
    {suggestedFriends?.length > 0 && suggestedFriends.map((suggestedFriend)=>(
      <SuggestedFriends  user={suggestedFriend } />
    ))}
   
  </StyledActiveContainer>;
};

export default Active;
