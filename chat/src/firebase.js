import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWcAbMaN3G9nLx8JWxcMaJ7KxSasNtk6Y",
    authDomain: "chat-ci-d12.firebaseapp.com",
    projectId: "chat-ci-d12",
    storageBucket: "chat-ci-d12.appspot.com",
    messagingSenderId: "17449955406",
    appId: "1:17449955406:web:9b15f6cce05d4e13d6531f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();