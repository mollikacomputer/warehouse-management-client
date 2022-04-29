// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhqJ_iVR5vLqpyRZqBUJXtQtKgOpRbW44",
  authDomain: "assignment-11-4a768.firebaseapp.com",
  projectId: "assignment-11-4a768",
  storageBucket: "assignment-11-4a768.appspot.com",
  messagingSenderId: "1052035088827",
  appId: "1:1052035088827:web:110f11d1a52e11aa45049e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;