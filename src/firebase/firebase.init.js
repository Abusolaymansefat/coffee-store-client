// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVDvkBb_Bi9KA1uVwWvtEIZ1Lz0_iCmwM",
  authDomain: "coffee-store-app-9b94b.firebaseapp.com",
  projectId: "coffee-store-app-9b94b",
  storageBucket: "coffee-store-app-9b94b.firebasestorage.app",
  messagingSenderId: "1069162233891",
  appId: "1:1069162233891:web:495da70f85bde87f413196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);