import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export function Login() {
  return (
    <div className="flex justify-around items-center h-screen">
      <SignUp />
      <SignIn />
    </div>
  );
}
