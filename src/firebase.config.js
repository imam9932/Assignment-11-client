// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWC1Y5ACmMcQmx9jjgzqgCplBnZ0FV5w",
  authDomain: "tikitali.firebaseapp.com",
  projectId: "tikitali",
  storageBucket: "tikitali.firebasestorage.app",
  messagingSenderId: "219011082866",
  appId: "1:219011082866:web:8a2d337efe5be6fea570eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()