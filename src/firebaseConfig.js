// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWV5jTJrjOSLcN-uXysO1GbNB0AMYRZks",
    authDomain: "webdev-lingkungan.firebaseapp.com",
    projectId: "webdev-lingkungan",
    storageBucket: "webdev-lingkungan.firebasestorage.app",
    messagingSenderId: "629764272453",
    appId: "1:629764272453:web:a9f9728c0b6b166db88e2c"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
