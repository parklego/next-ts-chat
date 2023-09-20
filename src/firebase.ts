// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf6UBcyxke4Xr16PlSOWCSRc4q3Jme3lU",
  authDomain: "next-ts-chat.firebaseapp.com",
  projectId: "next-ts-chat",
  storageBucket: "next-ts-chat.appspot.com",
  messagingSenderId: "752522544387",
  appId: "1:752522544387:web:48d1444033b80f9f631536",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
