import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  arrayUnion,
  updateDoc,
  arrayRemove,
  limit,
} from "firebase/firestore";
import { userProfileType, userType } from "../Types/userType";
import { isItArrayofString } from "../utils/utils";
import { useAuth } from "./useAuth";
import { firestore } from "../firebase/firebase";
import { getAuth } from "@firebase/auth";

interface SuggestedFriendsContextType {
  suggestedFriends: userType[];
  ToggleSuggestedFriends: (user: userType) => Promise<void>;
  sent: boolean;
}

const SuggestedFriendsContext = createContext(
  {} as SuggestedFriendsContextType
);

export function useSuggestedFriends() {
  return useContext(SuggestedFriendsContext);
}

export function SuggestedFriendsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [suggestedFriends, setSuggestedFriends] = useState([] as userType[]);
  const [loading, setLoading] = useState(true);
  const [sent, setSent] = useState(false);

  // Need to make type check for query

  const { currentUserProfile } = useAuth();
  let friendsList = currentUserProfile.friends.map((friend) => friend.userId);

  if (!isItArrayofString(friendsList)) {
    friendsList = ["empty"];
  }

  useEffect(() => { // We need to refactor it again... Shit... Shit ... Damn... 
    const q = query(
      collection(firestore, "users"),
      where("userId", "not-in", friendsList),limit(10)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setLoading(true);
      const list = [] as userType[];
      querySnapshot.forEach((doc) => {
        list.push({
          userId: doc.data().userId,
          displayName: doc.data().displayName,
          profilePic: doc.data().profilePic,
        });
      });
      setSuggestedFriends(list);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const ToggleSuggestedFriends = async (user: userType) => {
    try {
      const auth = getAuth();
      const docRef = auth && doc(firestore, "users", auth!?.currentUser!?.uid);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data() as userProfileType;
      let RequestList = docData.FriendsRequest.map((request) => request.userId);

      if (!isItArrayofString(RequestList)) {
        RequestList = [];
      }

      if (!RequestList.includes(user.userId)) {
        await updateDoc(docRef, {
          sendFriendsRequest: arrayUnion(user),
        });
        setSent(true);
      } else {
        await updateDoc(docRef, {
          sendFriendsRequest: arrayRemove(user),
        });
        setSent(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    suggestedFriends,
    ToggleSuggestedFriends,
    sent,
  };

  return (
    <SuggestedFriendsContext.Provider value={value}>
      {!loading && children}
    </SuggestedFriendsContext.Provider>
  );
}
