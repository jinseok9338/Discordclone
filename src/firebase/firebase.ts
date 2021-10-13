// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { FirebaseConfig } from "./firebaseConfig";

const firebaseConfig = FirebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Might need analytics later
export const auth = getAuth(app);
export const firestore = getFirestore(app);
