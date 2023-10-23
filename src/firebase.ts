// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfzacHBrn7KTDQPlfIk5OrUysxfRYHnwg",
  authDomain: "next-chat-a8d20.firebaseapp.com",
  projectId: "next-chat-a8d20",
  storageBucket: "next-chat-a8d20.appspot.com",
  messagingSenderId: "952558605652",
  appId: "1:952558605652:web:ac9b51882fb17ec041a4c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
