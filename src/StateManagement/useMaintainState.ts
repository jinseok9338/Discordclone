import { useContext, useState, useEffect } from "react";
import { chatType } from "../Types/chatType";
import { userProfileType } from "../Types/userType";
import { stateContext } from "./context";


const useMaintainState = () => {
    const { state, dispatch } = useContext(stateContext)
    const [mainState, setMaionState] = useState<{ user: userProfileType, chats: chatType[] }>(JSON.parse(sessionStorage.getItem('state')!) ? JSON.parse(sessionStorage.getItem('state')!) : {})

    useEffect(() => {
        // Whenever state change you should theroretically setItem and retrieve Item but when the page is refreshed... You can't do that ... 
        // What the fuck
        sessionStorage.setItem('state', JSON.stringify(state));
        setMaionState(JSON.parse(sessionStorage.getItem('state')!));
    }, [state, mainState]);
    return { mainState}
}

export default  useMaintainState