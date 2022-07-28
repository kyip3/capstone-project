import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  //console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () =>{
  await signOut(auth);
};


//track when user authenticate in and out
//listen for changes.
export const onAuthStateChangedListener = (callback) =>{
  return onAuthStateChanged(auth,callback );
}