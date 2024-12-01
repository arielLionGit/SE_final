import { auth, database } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

// Register new user
export function registerUser(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      console.log("User registration successful:", user.uid);

      // Save user data to Realtime Database
      set(ref(database, 'users/' + user.uid), {
        username: name,
        email: email
      })
      .then(() => {
        console.log("User data saved to Realtime Database");
      })
      .catch((error) => {
        console.error("Failed to save user data:", error);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration failed:", errorCode, errorMessage);
    });
}

// Login user
export function loginUser(email, password) {
  // Implement login functionality as needed
}