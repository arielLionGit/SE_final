// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTjkufP4mtjwHv4WDokER5juRUXxp6pjg",
  authDomain: "it350-7cebd.firebaseapp.com",
  databaseURL: "https://it350-7cebd-default-rtdb.firebaseio.com",
  projectId: "it350-7cebd",
  storageBucket: "it350-7cebd.appspot.com",
  messagingSenderId: "77388034445",
  appId: "1:77388034445:web:af46ceea614fd1142a0dc4",
  measurementId: "G-MVG8V25RGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };