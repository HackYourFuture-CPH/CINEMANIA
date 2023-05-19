// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'cinemania-a26e9.firebaseapp.com',
  projectId: 'cinemania-a26e9',
  storageBucket: 'cinemania-a26e9.appspot.com',
  messagingSenderId: '888500505212',
  appId: '1:888500505212:web:2a1da41d6f90094f3a97f9',
  measurementId: 'G-BDDMSC035B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
