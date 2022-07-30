// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-dUoQulGTLJrYUj6TbRjLTBTUx-NK7s",
  authDomain: "planner-82870.firebaseapp.com",
  databaseURL: "https://planner-82870-default-rtdb.firebaseio.com",
  projectId: "planner-82870",
  storageBucket: "planner-82870.appspot.com",
  messagingSenderId: "289601640250",
  appId: "1:289601640250:web:819ed9e782dba2c0296203",
  measurementId: "G-DSDE5TPLJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth();