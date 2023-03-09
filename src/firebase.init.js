// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4yPzHzCEC5t39oYwLX6343Lo7fVplkb4",
  authDomain: "manufacture-mc.firebaseapp.com",
  projectId: "manufacture-mc",
  storageBucket: "manufacture-mc.appspot.com",
  messagingSenderId: "818623153820",
  appId: "1:818623153820:web:3f128a7a546c245e8dcf59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth