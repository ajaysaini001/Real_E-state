// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDdBAW-ry56dnmmaE-ujNQnmTI81gtEIcw",
  authDomain: "vite-contact-99e2a.firebaseapp.com",
  projectId: "vite-contact-99e2a",
  storageBucket: "vite-contact-99e2a.appspot.com",
  messagingSenderId: "640262195620",
  appId: "1:640262195620:web:43533426f5b0fcb7d59931"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);