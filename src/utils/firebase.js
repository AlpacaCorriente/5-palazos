import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZm-x-2fop9wPB7mKAz2qQ8Vsg8o8BFM",
  authDomain: "palazos-de047.firebaseapp.com",
  projectId: "palazos-de047",
  storageBucket: "palazos-de047.appspot.com",
  messagingSenderId: "995888925453",
  appId: "1:995888925453:web:e29d49520e2dac4f5efe44"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);