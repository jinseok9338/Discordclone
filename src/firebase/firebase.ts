// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { FirebaseConfig } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = FirebaseConfig;

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Might need analytics later
export const auth = getAuth();
