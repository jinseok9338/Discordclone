// making context with dispatch and add user Function // THis is better for simplicity

import { useContext } from "react";
import { stateContext } from "../StateManagement/context";
import { doc, getDoc } from "firebase/firestore";
import {firestore} from "../firebase/firebase"
import { userProfileType } from "../Types/userType";



const useDispatch = () => {
    const { dispatch } = useContext(stateContext)
    
    const SetUserFunction = async (userId:string) => {
        const docRef = doc(firestore, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data() as userProfileType
            dispatch({type:"SET_USER",payload:userData})
            console.log("Document data:", docSnap.data());
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            dispatch({ type: "SET_USER", payload: {} as userProfileType })
        }
    }

  

    
    return { SetUserFunction }
}

export default useDispatch


