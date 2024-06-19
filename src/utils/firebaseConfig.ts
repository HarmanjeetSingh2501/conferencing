import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "video-confrencing-2c30f.firebaseapp.com",
  projectId: "video-confrencing-2c30f",
  storageBucket: "video-confrencing-2c30f.appspot.com",
  messagingSenderId: "1033327964631",
  appId: "1:1033327964631:web:eee6800ea72d3cfa1d9b92",
  measurementId: "G-8W1QYK8DM1",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
