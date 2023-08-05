import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKihPd_Q6NNK6nbJgWU817QU5uZcYxOQM",
  authDomain: "chat-app-b735f.firebaseapp.com",
  projectId: "chat-app-b735f",
  storageBucket: "chat-app-b735f.appspot.com",
  messagingSenderId: "937490400982",
  appId: "1:937490400982:web:812088118dd2f203606b77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
