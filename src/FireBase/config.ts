// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW-_k8mOyNLHiSg7NT4Kir4WqISCSVPwE",
  authDomain: "verum-news.firebaseapp.com",
  projectId: "verum-news",
  storageBucket: "verum-news.appspot.com",
  messagingSenderId: "294945064418",
  appId: "1:294945064418:web:d33750d81f6c9714c7e5bb",
  measurementId: "G-T9E43CN1N9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);