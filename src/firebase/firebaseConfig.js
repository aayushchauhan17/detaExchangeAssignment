import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlUbMm2VLsKDRHcf1lRhulOtbQhpKCklg",
  authDomain: "delta-exchange-assignment.firebaseapp.com",
  projectId: "delta-exchange-assignment",
  storageBucket: "delta-exchange-assignment.appspot.com",
  messagingSenderId: "371503276025",
  appId: "1:371503276025:web:6e2d55b528e5ff4ea42728",
  measurementId: "G-R8HBSCT7XS",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
