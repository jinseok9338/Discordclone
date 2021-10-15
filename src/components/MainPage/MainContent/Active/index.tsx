import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
import SuggestedFriends from "./SuggestedFriends";
import { collection, FieldPath, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebase";
import { useEffect, useState } from "react";
import { userType } from "../../../../Types/userType";
import { ObjectFlags } from "typescript";

export const StyledActiveContainer = styled.div`
  width: 417px;
  height: 1008px;
  background-color: #36393f;
  display:flex;
  flex-direction:column;
  align-items:center;
`;





const Active = () => {

  // Suggest
  const [suggestedFriends, setSuggestedFriends] = useState<userType[]>([])
  const { mainState } = useMaintainState()
  useEffect(() => {
    if (Object.keys(mainState).length > 0) {
      const usersRef = collection(firestore, "users")
      const q = query(usersRef, where("userId", "!=", mainState?.user?.userId), where('userId', "not-in", mainState?.user?.friends?.map((friend) => friend.userId)), orderBy("userId"), limit(8));
      // ToDO could cause the error because the friends list can be empty.. What to do 
      getDocs(q).then((QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
          const Friend = {
            userId: doc.data().userId,
            displayName: doc.data().displayName,
            profilePic: doc.data().profilePic,
          }
          setSuggestedFriends([...suggestedFriends, Friend])
        }

        )
      })
    }  
},[])



  return <StyledActiveContainer>
    {suggestedFriends?.length > 0 && suggestedFriends.map((suggestedFriend)=>(
      <SuggestedFriends user={suggestedFriend } />
    ))}
   
  </StyledActiveContainer>;
};

export default Active;
