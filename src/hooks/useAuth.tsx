import { User } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'

const AuthContext = createContext({} as User | null)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }:{children:ReactNode}) {
    const [currentUser, setCurrentUser] = useState({} as User | null)
    const [loading, setLoading] = useState(true)

  

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])


    return (
        < AuthContext.Provider value={currentUser} >
        { !loading && children}
</AuthContext.Provider>
  )

}