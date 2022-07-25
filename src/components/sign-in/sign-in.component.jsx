import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //for sign in direction
  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    },
    []
  );

  //for google pop out sign in
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //for sign in direction
  const logGoogleUserRedirect = async () => {
    const response = await signInWithGoogleRedirect();
    console.log(response);
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>SIGN IN</button>
      <button onClick={logGoogleUserRedirect}>SIGN IN REDIRECT</button>
    </div>
  );
};

export default SignIn;
