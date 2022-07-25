import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const { user } = response;
    createUserDocumentFromAuth(user);

  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>SIGN IN</button>
    </div>
  );
};

export default SignIn;
