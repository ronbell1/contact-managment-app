// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsvpKcEjhGfmuFfBEU798GdJsnGW448pw",
  authDomain: "vite-contact-ffc73.firebaseapp.com",
  projectId: "vite-contact-ffc73",
  storageBucket: "vite-contact-ffc73.firebasestorage.app",
  messagingSenderId: "405817729406",
  appId: "1:405817729406:web:bca1e9867a1ea19a0d132f",
  measurementId: "G-D3D8D5VXF8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);