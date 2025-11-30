// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0d2CsXN69UChoEjFWFuLRl4fB_5j8Q00",
  authDomain: "hpnrttest.firebaseapp.com",
  projectId: "hpnrttest",
  storageBucket: "hpnrttest.firebasestorage.app",
  messagingSenderId: "861126703238",
  appId: "1:861126703238:web:b720f5a01a8b2da8403907",
  measurementId: "G-4RWX77NRJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

