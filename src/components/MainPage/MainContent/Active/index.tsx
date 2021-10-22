import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
import SuggestedFriends from "./SuggestedFriends";
import { collection, FieldPath, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebase";
import { useEffect, useState } from "react";
import { userType } from "../../../../Types/userType";
import { doc, onSnapshot } from "firebase/firestore";
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



 


  useEffect(() => {
    if (Object.keys(currentUserProfile).length > 0) {
      const usersRef = collection(firestore, "users")
      let friendsList = currentUserProfile.friends?.map((friend) => friend.userId)
      
      if ( typeof friendsList === string[]) {
        friendsList=["empty"]
      }
      console.log(friendsList)
      // This is expected but we need to have catch block... For the error handling ... Tedious... 
      const q  = query(usersRef,  where('userId', "not-in", friendsList), orderBy("userId"), limit(8));
      // ToDO could cause the error because the friends list can be empty.. What to do 
     const unsubscribe =  onSnapshot(q, (QuerySnapshot) => {
        const FriendsList = [] as userType[]
        QuerySnapshot.forEach((doc) => {
          const Friend = {
            userId: doc.data().userId,
            displayName: doc.data().displayName,
            profilePic: doc.data().profilePic,
          }
          FriendsList.push(Friend);
          
        }
          
        )
        const newFriendsList = FriendsList.filter((friends) => friends.userId !== mainState?.user?.userId)
        console.log(newFriendsList)
        setSuggestedFriends(newFriendsList)
      })
      return unsubscribe
    }  
  }, [])
  



  


  return <StyledActiveContainer>
    <StyledFriendsListTitle>Suggested Friends</StyledFriendsListTitle>
    {suggestedFriends?.length > 0 && suggestedFriends.map((suggestedFriend)=>(
      <SuggestedFriends  user={suggestedFriend } />
    ))}
   
  </StyledActiveContainer>;
};

export default Active;
