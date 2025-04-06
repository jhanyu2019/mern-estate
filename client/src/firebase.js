// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a3203.firebaseapp.com",
  projectId: "mern-estate-a3203",
  storageBucket: "mern-estate-a3203.appspot.com",
  messagingSenderId: "253201451500",
  appId: "1:253201451500:web:cd9c2c0f61a9771a73d8c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);