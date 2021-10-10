import { useContext, useState, useEffect } from "react";
import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { stateContext } from "./context";


const useMaintainState = () => {
    const { state } = useContext(stateContext)
    const [mainState, setMaionState] = useState<{ user: userProfileType, chats: chatType[] }>(JSON.parse(sessionStorage.getItem('state')!) ? JSON.parse(sessionStorage.getItem('state')!) : {})

    useEffect(() => {
        if (Object.keys(state).length !== 0) {
            sessionStorage.setItem('state', JSON.stringify(state));
        }
        
        setMaionState(JSON.parse(sessionStorage.getItem('state')!));
    }, [state]);
    return {mainState}
}

export default  useMaintainState