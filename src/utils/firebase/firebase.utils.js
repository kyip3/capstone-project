// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-m0fFcIIL8QkRbtwibDrza-G7BPOtOfw",
  authDomain: "crwn-clothing-db-8c3c0.firebaseapp.com",
  projectId: "crwn-clothing-db-8c3c0",
  storageBucket: "crwn-clothing-db-8c3c0.appspot.com",
  messagingSenderId: "952952444996",
  appId: "1:952952444996:web:134a5f35ef3541293d0411",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select-account",
// });

const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
