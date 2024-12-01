import { database } from "../firebaseConfig";
import { ref, set, get, child } from "firebase/database";

// Save user data to Realtime Database
export function saveUserData(userId, name, email) {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email
  })
  .then(() => {
    console.log("Data saved successfully!");
  })
  .catch((error) => {
    console.error("Failed to save data:", error);
  });
}

// Read user data from Realtime Database
export function getUserData(userId) {
  const dbRef = ref(database);
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("User data:", snapshot.val());
    } else {
      console.log("User data not found");
    }
  }).catch((error) => {
    console.error("Failed to read data:", error);
  });
}