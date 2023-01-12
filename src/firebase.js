import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBWG8uTrwMMTwFn2-dUb2ry-roUyM2-gH4",
  authDomain: "chat-ece77.firebaseapp.com",
  projectId: "chat-ece77",
  storageBucket: "chat-ece77.appspot.com",
  messagingSenderId: "250759664889",
  appId: "1:250759664889:web:094f282dcb7a9c03f43e28"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

