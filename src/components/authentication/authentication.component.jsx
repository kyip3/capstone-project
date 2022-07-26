import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
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


  //for sign in direction
  // not in use
  // const logGoogleUserRedirect = async () => {
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response);
  //   const { user } = response;
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
