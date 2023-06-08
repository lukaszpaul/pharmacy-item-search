// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDPSOcaKDLfTkn2i2-znxnYEV50xE76Q",
  authDomain: "pharmacy-item-search.firebaseapp.com",
  databaseURL: "https://pharmacy-item-search-default-rtdb.firebaseio.com",
  projectId: "pharmacy-item-search",
  storageBucket: "pharmacy-item-search.appspot.com",
  messagingSenderId: "757091557758",
  appId: "1:757091557758:web:9a197b5d0709f6fa32d32f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;