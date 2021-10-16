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

const StyledFriendsListTitle = styled.h1`

`



const Active = () => {

  // Suggest
  const [suggestedFriends, setSuggestedFriends] = useState<userType[]>([])
  const { mainState } = useMaintainState()
  useEffect(() => {
    if (Object.keys(mainState).length > 0) {
      const usersRef = collection(firestore, "users")
      let friendsList = mainState?.user?.friends?.map((friend) => friend.userId)
      if (friendsList.length === 0) {
        friendsList=["empty"]
      }
      const q = query(usersRef,  where('userId', "not-in", friendsList), orderBy("userId"), limit(8));
      // ToDO could cause the error because the friends list can be empty.. What to do 
      getDocs(q).then((QuerySnapshot) => {
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
        setSuggestedFriends(newFriendsList)
      })
    }  
  }, [])
  



  console.log(suggestedFriends)


  return <StyledActiveContainer>
    <StyledFriendsListTitle>Suggested Friends</StyledFriendsListTitle>
    {suggestedFriends?.length > 0 && suggestedFriends.map((suggestedFriend)=>(
      <SuggestedFriends user={suggestedFriend } />
    ))}
   
  </StyledActiveContainer>;
};

export default Active;
