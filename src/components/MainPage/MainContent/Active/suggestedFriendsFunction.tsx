import {
  updateDoc,
  arrayUnion,
  arrayRemove,
  limit,
  doc,
} from "firebase/firestore";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { firestore } from "../../../../firebase/firebase";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import useMaintainState from "../../../../hooks/useMaintainState";
import { userType } from "../../../../Types/userType";

interface SuggestedFriendsContextType {
  suggestedFriendsList: userType[];
}

const SuggestedFriendsContext = createContext(
  {} as SuggestedFriendsContextType | undefined
);

export function useSuggestedFriends() {
  return useContext(SuggestedFriendsContext);
}

//Make it subscribe to the firestore and have the function to toggle the

export const useSuggestedFriendsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [suggestedFriendsList, setSuggestedFriendsList] = useState(
    [] as userType[]
  );
  const { mainState } = useMaintainState();

  useEffect(() => {
    const listedFriends =
      mainState?.user?.friends?.length > 0
        ? mainState?.user?.friends.map((friend) => friend.userId)
        : ["empty"];
    const q = query(
      collection(firestore, "users"),
      where("userId", "not-in", listedFriends),
      limit(8)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const filteredList = [] as userType[];
      querySnapshot.forEach((doc) => {
        filteredList.push(doc.data() as userType);
      });
      setSuggestedFriendsList(filteredList);
    });

    return unsubscribe; // You need to unsubscribe the onsnap shot otherwise it will lead to memory leak
  }, []);

  const toggleSendFriendsRequest = (user: userType) => {
    const FriendsListRef = doc(firestore, "users", mainState?.user?.userId);
    const requestSentRef = doc(firestore, "users", user?.userId);
  };

  const value = {
    suggestedFriendsList,
  };

  return (
    <SuggestedFriendsContext.Provider value={value}>
      {children}
    </SuggestedFriendsContext.Provider>
  );
};

// if (mainUser.FriendsRequestSent?.filter((requestedFriend) => requestedFriend.userId === user?.userId).length > 0) {
//     console.log(mainUser.FriendsRequestSent?.filter((requestedFriend) => requestedFriend.userId === user?.userId))
//     await updateDoc(FriendsListRef, {
//         FriendsRequestSent: arrayUnion(user)
//     });
//     await updateDoc(requestSentRef, {
//         FriendsRequest: arrayUnion(
//             {
//                 userId: mainUser.userId,
//                 profilePic: mainUser.profilePic,
//                 displayName: mainUser.displayName
//             }
//         )
//     })
//     // Not updating the MainState Friends request Tonight
//     setSent(true)
//     console.log("Sent")
// } else {
//     await updateDoc(FriendsListRef, {
//         FriendsRequestSent: arrayRemove(user)
//     });
//     await updateDoc(requestSentRef, {
//         FriendsRequest: arrayRemove(
//             {
//                 userId: mainUser.userId,
//                 profilePic: mainUser.profilePic,
//                 displayName: mainUser.displayName
//             }
//         )
//     })
//     setSent(false)
//     console.log("Unsent")
// }
