import { useContext, useState, useEffect } from "react";
import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { stateContext } from "../StateManagement/context";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase";


const useMaintainState = () => {
    const { state,dispatch } = useContext(stateContext)
    const [mainState, setMaintainState] = useState<{ user: userProfileType, selctedChatRoom: string }>(JSON.parse(sessionStorage.getItem('state')!) ? JSON.parse(sessionStorage.getItem('state')!) : {})
    const [chats, setChats] = useState([] as chatType[])
 

    useEffect(() => {
        if (Object.keys(state.user).length !== 0) {
            sessionStorage.setItem('state', JSON.stringify(state));
            setMaintainState(JSON.parse(sessionStorage.getItem('state')!));
        }
        // Retrieve from the sessionStorage and also need to set the state too 
        setMaintainState(JSON.parse(sessionStorage.getItem('state')!));
       
        
    }, [state]);

    useEffect(() => {
        if (state?.user?.chatRooms?.length > 0) {
            const ChatQuery = query(collection(firestore, "chats"), where("chatId", "in", mainState?.user?.chatRooms)); // Problem is that it chatRooms can be empty
            const unsubscribe = onSnapshot(ChatQuery, (querySnapshot) => {
                const queriedChats = [] as chatType[];
                querySnapshot.forEach((doc) => {
                    queriedChats.push(doc.data().name);

                });

                setChats(queriedChats)
                console.log(queriedChats)
            });

            //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
            return () => unsubscribe()
        }
    }, []);

    return { mainState, chats}
}

export default  useMaintainState