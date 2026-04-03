import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCtkQufDSmf0gHl5Fhw4t_XhKBmC7kS6F8",
  authDomain: "ccassignment-8667d.firebaseapp.com",
  projectId: "ccassignment-8667d",
  storageBucket: "ccassignment-8667d.firebasestorage.app",
  messagingSenderId: "316298478598",
  appId: "1:316298478598:web:086a9e859b07012c58ef87",
  measurementId: "G-N51CR5CWKG",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
