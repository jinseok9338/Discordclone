import { doc, onSnapshot } from 'firebase/firestore'
import {  User } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { ErrorType } from '../components/SignUpForm/StyledSignUpForm'
import { auth, firestore } from '../firebase/firebase'
import { userProfileType } from '../Types/userType'
import useUserFunc from './useUserFunc'




interface AuthContextType {
    currentAuthUser: User | null;
    handleSignUpSubmit: (email: string, password: string, confirmPassword: string) => Promise<void>
    error: ErrorType;
    handleLoginSubmit: (email: string, password: string) => Promise<void>
    currentUserProfile: userProfileType
}

const AuthContext = createContext({} as AuthContextType)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }:{children:ReactNode}) {
    const [currentAuthUser, setCurrentAuthUser] = useState<User|null>(null)
    const [ currentUserProfile, setCurrentUserProfile] = useState({} as userProfileType)
    const [loading, setLoading] = useState(true)
    const {error,handleLoginSubmit,handleSignUpSubmit} = useUserFunc()
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentAuthUser(user!)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    useEffect(() => {
        if (currentAuthUser) {
            const unsubscribe = onSnapshot(doc(firestore, "users", currentAuthUser?.uid), (doc) => {
                setCurrentUserProfile(doc.data() as userProfileType)
            });

            return unsubscribe
        }
    }, [currentAuthUser])



    const value = {
        currentAuthUser,
        handleSignUpSubmit,
        error,
        handleLoginSubmit,
        currentUserProfile
    }


    return (
        < AuthContext.Provider value={value} >
        { !loading && children}
</AuthContext.Provider>
  )

}