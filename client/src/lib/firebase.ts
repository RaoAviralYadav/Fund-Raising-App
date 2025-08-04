// Import the functions you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // ✅ For auth

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCdKM-mS-C0w0knnUmuxiyioIuPQtKE8KE",
  authDomain: "fund-raiser-portal.firebaseapp.com",
  projectId: "fund-raiser-portal",
  storageBucket: "fund-raiser-portal.firebasestorage.app",
  messagingSenderId: "867350513230",
  appId: "1:867350513230:web:e5ff76a9fd9a1d5180651f",
  measurementId: "G-79TBJWRBRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth for login/register
export const auth = getAuth(app);
