import { useState } from "react";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export function Login() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      {showSignIn ? (
        <SignIn setShowSignIn={setShowSignIn} showSignIn={showSignIn} />
      ) : (
        <SignUp setShowSignIn={setShowSignIn} showSignIn={showSignIn} />
      )}
    </>
  );
}
