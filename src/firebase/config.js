
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1s1JCUGPts0eMoQx9ueVBXZEgVjsspfM",
  authDomain: "entregafinalreactjs-1998b.firebaseapp.com",
  projectId: "entregafinalreactjs-1998b",
  storageBucket: "entregafinalreactjs-1998b.appspot.com",
  messagingSenderId: "740899243051",
  appId: "1:740899243051:web:ca82ba28052051b589966e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()