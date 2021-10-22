import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import { userType } from "../Types/userType";
import { isItArrayofString } from "../utils/utils";
import { useAuth } from "./useAuth";
import { firestore } from "../firebase/firebase";


interface SuggestedFriendsContextType {
    suggestedFriends: userType[]
}

const SuggestedFriendsContext = createContext({} as SuggestedFriendsContextType)

export function useSuggestedFriends() {
    return useContext(SuggestedFriendsContext)
}

export function SuggestedFriendsProvider({ children }: { children: ReactNode }) {
    const [suggestedFriends, setSuggestedFriends] = useState([] as userType[]);
    const [loading, setLoading] = useState(true)
    // Need to make type check for query


    const {currentUserProfile} = useAuth()
    let friendsList = currentUserProfile.friends.map((friend) => friend.userId)
    
    if (!isItArrayofString(friendsList)) {
        friendsList = ["empty"]
    }



    useEffect(() => {
        const q = query(collection(firestore, "users"), where("userId", "not-in", friendsList));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setLoading(true)
            const list = [] as userType[];
            querySnapshot.forEach((doc) => {
                list.push({
                    userId: doc.data().userId,
                    displayName: doc.data().displayName,
                    profilePic:doc.data().profilePic
                });
            });
            setSuggestedFriends(list)
            setLoading(false)
        });

        return unsubscribe
    }, [])



    const value = {
        suggestedFriends
    }


    return (
        <SuggestedFriendsContext.Provider value={value} >
            {!loading && children}
        </SuggestedFriendsContext.Provider>
    )

}