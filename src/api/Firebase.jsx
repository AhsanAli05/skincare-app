// src/api/Firebase.jsx
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqPbhkWHfLlY7rlS59uWYvmxWBXO8fmvU",
  authDomain: "skin-care-1eda4.firebaseapp.com",
  projectId: "skin-care-1eda4",
  storageBucket: "skin-care-1eda4.firebasestorage.app",
  messagingSenderId: "514962065828",
  appId: "1:514962065828:web:c9f395d02474e8bae6d931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Function to log in with Google
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User info:", result.user);
  } catch (error) {
    console.error("Google login error:", error.message);
  }
};


export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  loginWithGoogle
};
