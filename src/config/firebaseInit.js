// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-uXLWW-WkJoh0xQunzxMlWZBkCiNNN28",
  authDomain: "task-manager-dc006.firebaseapp.com",
  projectId: "task-manager-dc006",
  storageBucket: "task-manager-dc006.appspot.com",
  messagingSenderId: "804286584596",
  appId: "1:804286584596:web:04a63473448f3f27779401",
  measurementId: "G-WJXBPEDLGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);
export {db}