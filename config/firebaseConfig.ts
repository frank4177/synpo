// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjGVtGL36YZ2NHFuNefGfH9fn2lfUeHH8",
  authDomain: "syntax-e545a.firebaseapp.com",
  projectId: "syntax-e545a",
  storageBucket: "syntax-e545a.appspot.com",
  messagingSenderId: "97080785400",
  appId: "1:97080785400:web:b25111c4a4a722d5273e0d",
  measurementId: "G-F0V56XK980"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const authentication = getAuth(app)

export const db = getFirestore(app);

export const reviewsRef = collection(db, 'reviews')
