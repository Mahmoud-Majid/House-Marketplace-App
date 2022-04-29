import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBthIOl-tMRbWRF3gIMrTqcBGhWtDiAjW8",
    authDomain: "house-marketplace-app-e0d1d.firebaseapp.com",
    projectId: "house-marketplace-app-e0d1d",
    storageBucket: "house-marketplace-app-e0d1d.appspot.com",
    messagingSenderId: "125736149437",
    appId: "1:125736149437:web:1020ad01c5c72f0eb2f2d4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 