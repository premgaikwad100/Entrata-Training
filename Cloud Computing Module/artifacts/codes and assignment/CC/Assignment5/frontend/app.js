// Import Firebase Config
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register User
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const name = document.getElementById("reg-name").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        fetch("/store_user_data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid: userCredential.user.uid, name, email }),
        });
        alert("User registered successfully!");
      })
      .catch((error) => alert(error.message));
  });

// Login User
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User logged in successfully!");
    })
    .catch((error) => alert(error.message));
});
