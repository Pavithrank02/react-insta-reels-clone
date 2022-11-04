// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhci5d3iYbyLWLBvhUhlcn2QBAq5Zy54Q",
  authDomain: "ig-reels-clone-7188c.firebaseapp.com",
  projectId: "ig-reels-clone-7188c",
  storageBucket: "ig-reels-clone-7188c.appspot.com",
  messagingSenderId: "1008822715545",
  appId: "1:1008822715545:web:71b41528458585cd26a408",
  measurementId: "G-V2ZE4725F8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;