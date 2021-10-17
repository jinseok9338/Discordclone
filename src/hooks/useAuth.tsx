import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }:{chilren:ReactNode}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

  

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
    }

    return (
        < AuthContext.Provider value= { value } >
        { !loading && children}
</AuthContext.Provider>
  )

}