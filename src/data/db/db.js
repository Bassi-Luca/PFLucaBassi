// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTCEG6gTcCd0WL9oCFHv6--1Bdey90rj8",
  authDomain: "e-book-coderhouse.firebaseapp.com",
  projectId: "e-book-coderhouse",
  storageBucket: "e-book-coderhouse.appspot.com",
  messagingSenderId: "601082195360",
  appId: "1:601082195360:web:dbc1c2d39257b2bf8048c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db