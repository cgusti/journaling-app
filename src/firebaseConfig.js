import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfygcHv46JCt67Z-fzcsOdjv7R6EZsOAQ",
  authDomain: "blog-2c740.firebaseapp.com",
  projectId: "blog-2c740",
  storageBucket: "blog-2c740.appspot.com",
  messagingSenderId: "555647485361",
  appId: "1:555647485361:web:8563ec78842627f4d3a990",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
