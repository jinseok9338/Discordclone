import { useContext, useState, useEffect } from "react";
import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { stateContext } from "../StateManagement/context";


const useMaintainState = () => {
    const { state } = useContext(stateContext)
    const [mainState, setMaintainState] = useState<{ user: userProfileType, chats: chatType[] }>(JSON.parse(sessionStorage.getItem('state')!) ? JSON.parse(sessionStorage.getItem('state')!) : {})

    useEffect(() => {
        if (Object.keys(state.user).length !== 0 || state.chats.length !== 0) {
            sessionStorage.setItem('state', JSON.stringify(state));
            setMaintainState(JSON.parse(sessionStorage.getItem('state')!));
        }
        // Retrieve from the sessionStorage
        setMaintainState(JSON.parse(sessionStorage.getItem('state')!));
        
    }, [state]);

    return {mainState}
}

export default  useMaintainState