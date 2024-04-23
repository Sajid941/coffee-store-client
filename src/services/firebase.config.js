// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC436UCwUddOZHiOzD7Uz2MsmhpSufE6sw",
  authDomain: "coffee-store-5a8f3.firebaseapp.com",
  projectId: "coffee-store-5a8f3",
  storageBucket: "coffee-store-5a8f3.appspot.com",
  messagingSenderId: "597153895830",
  appId: "1:597153895830:web:2c4e4f43c61b546f5039b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;