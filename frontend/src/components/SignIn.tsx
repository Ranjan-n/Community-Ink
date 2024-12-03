import { useState } from "react";
import { LoginHeading } from "./LoginHeading";
import { LoginInput } from "./LoginInput";
import { LoginSubHeading } from "./LoginSubHeading";
import { SignInInput } from "@ranjan07/communityink-common";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { Typer } from "./Typer";

export function SignIn({
  setShowSignIn,
  showSignIn,
}: {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  showSignIn: boolean;
}) {
  const [inputs, setInputs] = useState<SignInInput>({
    email: "",
    password: "",
  });
  const [isRequested, setIsRequested] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsRequested(true);
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputs);
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", res.data.name);
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setIsRequested(false);
    }
  };

  return (
    <div className="flex h-screen ">
      <Typer title="Welcome Back!" content={["Happy to see you again"]} />
      <div className="w-full sm:w-1/2  flex justify-center items-center">
        <form
          className="flex-col items-center justify-center max-w-80 p-7 shadow-slate-500 shadow-md sm:shadow-none"
          onSubmit={handleSubmit}
        >
          <LoginHeading heading="Login into your Account" />
          <LoginSubHeading
            setShowSignIn={setShowSignIn}
            showSignIn={showSignIn}
          />

          <LoginInput
            type="email"
            label="Email"
            placeholder="Enter your email Id"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            className="pt-5"
            id="SignInEmail"
          />
          <LoginInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="pt-5"
            id="SignInPassword"
          />

          <button
            className="bg-black w-full text-white rounded-md h-9 font-medium mt-5 hover:bg-slate-800 disabled:bg-slate-600 disabled:cursor-not-allowed"
            type="submit"
            disabled={isRequested}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
