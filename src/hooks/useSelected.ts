import { userType } from "../Types/userType";
import {useState} from "react"

const useSelected = () => {
    

    const [selected, setSelected] = useState([] as userType[]);


    const toggleSelected = (friend: userType) => {
        // if the user is already selected remove from the array
        if (!selected.find(item => item.userId === friend.userId)) {
            setSelected([...selected, friend])
        } else {
            // if the user is not selected add to the array
            const newArray = selected.filter(item => item.userId !== friend.userId)
            setSelected(newArray);
        }

    }

    return { selected, toggleSelected}
}

export default useSelected