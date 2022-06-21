// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2DEJrfBk6YMxNGxQS263PkNJQjCxUEpk",
  authDomain: "react-chat-8a03c.firebaseapp.com",
  projectId: "react-chat-8a03c",
  storageBucket: "react-chat-8a03c.appspot.com",
  messagingSenderId: "364943901081",
  appId: "1:364943901081:web:711d342dfebf9baf285308",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
