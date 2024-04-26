// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase touristss that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA90vk47J8dOP7WEGA-e-kyT0bVATkg2k",
  authDomain: "ttravol-a9.firebaseapp.com",
  projectId: "ttravol-a9",
  storageBucket: "ttravol-a9.appspot.com",
  messagingSenderId: "655886859023",
  appId: "1:655886859023:web:9fdf5a9cf681ed36715c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

