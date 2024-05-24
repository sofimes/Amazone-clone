import firebase from "firebase/compat/app";
//FOR AUthentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBucgdbk4_84FKV5s2MK7-lkRLHJ49L_h0",
  authDomain: "n-clone-8318b.firebaseapp.com",
  projectId: "n-clone-8318b",
  storageBucket: "n-clone-8318b.appspot.com",
  messagingSenderId: "496262448099",
  appId: "1:496262448099:web:4a1e3b4620c3cee304d6d6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
