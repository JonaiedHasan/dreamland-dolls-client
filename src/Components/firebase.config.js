// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_PASS)
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID

  apiKey: "AIzaSyAY3OCpwokV3eUe6BmXR1IOel2vPRGnW1U",
  authDomain: "toys-marketplace.firebaseapp.com",
  projectId: "toys-marketplace",
  storageBucket: "toys-marketplace.appspot.com",
  messagingSenderId: "118915011515",
  appId: "1:118915011515:web:ed8bd371c6686778296a9e"

  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);