import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0OO85oaiZisZPFGwAAsdbNsMsBVuew3w",
  authDomain: "notion-clone-72a49.firebaseapp.com",
  projectId: "notion-clone-72a49",
  storageBucket: "notion-clone-72a49.firebasestorage.app",
  messagingSenderId: "776991277797",
  appId: "1:776991277797:web:7517be66133db95ea10a0c"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db }