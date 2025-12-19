// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo91BQc8jyQ4ONw8ZWSJcjOYiiydR-4BM",
  authDomain: "dragon-news-bangladesh-bef84.firebaseapp.com",
  projectId: "dragon-news-bangladesh-bef84",
  storageBucket: "dragon-news-bangladesh-bef84.firebasestorage.app",
  messagingSenderId: "5127978836",
  appId: "1:5127978836:web:7ae44972dda5c262b952c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
