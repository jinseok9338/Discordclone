import { setDoc, doc } from '@firebase/firestore'
import { error } from 'console'
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ErrorType } from '../components/SignUpForm/StyledSignUpForm'
import { auth, firestore } from '../firebase/firebase'
import { userProfileType } from '../Types/userType'
import { validateConfirmPassword, validateEmail, validatePassword } from '../utils/utils'

import { onSnapshot } from "firebase/firestore";
import { zondicons } from 'styled-icons'



interface AuthContextType {
    currentAuthUser: User;
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
    const [currentAuthUser, setCurrentAuthUser] = useState({} as User)
    const [ currentUserProfile, setCurrentUserProfile] = useState({} as userProfileType)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({} as ErrorType);
    const history = useHistory();


  

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentAuthUser(user!)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(firestore, "users", currentAuthUser?.uid ), (doc) => {
            setCurrentUserProfile(doc.data() as userProfileType)
        });
        return unsubscribe
    },[])


    const handleSignUpSubmit = async (
        email: string,
        password: string,
        confirmPassword: string
    ) => {
        if (
            validateEmail(email) &&
            validatePassword(password) &&
            validateConfirmPassword(password, confirmPassword)
        ) {
            setError({} as ErrorType);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (UserCredential) => {
                    const user = UserCredential.user;
                    let data = {
                        userId: user.uid,
                        FriendsRequest: [],
                        FriendsRequestSent: [],
                        displayName:
                            user.displayName ||
                            user.email!.substr(0, user.email!.indexOf("@")),
                        email: user.email,
                        friends: [],
                        profilePic:
                            user.photoURL ||
                            `https://avatars.dicebear.com/api/initials/${user.email}.svg`,
                        chatRooms: [],
                    } as userProfileType;
                    await setDoc(doc(firestore, "users", user.uid), data);
                    // We do not set global state with dispatch and state
                    alert("user Created");
                    setError({} as ErrorType);
                    history.push("/");
                })
                .catch((error) => {
                    setError({
                        errorType: "other",
                        message: error.message,
                    });
                });
        }
        setError({
            errorType: !validateEmail(email)
                ? "email"
                : !validatePassword(password)
                    ? "password"
                    : !validateConfirmPassword(password, confirmPassword)
                        ? "confirmPassword"
                        : "other",
            message: !validateEmail(email)
                ? "Non-valid Email"
                : !validatePassword(password)
                    ? "Non-valid Password"
                    : !validateConfirmPassword(password, confirmPassword)
                        ? "Check Confirm Password Again"
                        : error?.message!,
        });
    };

    const handleLoginSubmit = async (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                history.push("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError({
                    errorType: "other",
                    message: errorMessage,
                });
            });
    };

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