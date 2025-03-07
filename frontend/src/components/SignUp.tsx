import { useState } from "react";
import { LoginHeading } from "./LoginHeading";
import { LoginInput } from "./LoginInput";
import { LoginSubHeading } from "./LoginSubHeading";
import { SignUpInput } from "@ranjan07/communityink-common";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Typer } from "./Typer";

export function SignUp({
  setShowSignIn,
  showSignIn,
}: {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  showSignIn: boolean;
}) {
  const [inputs, setInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });
  const [isRequested, setIsRequested] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsRequested(true);
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputs);
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
    <div className="flex h-screen">
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <form
          className="flex-col items-center justify-center p-7 shadow-slate-500 shadow-md sm:shadow-none"
          onSubmit={handleSubmit}
        >
          <LoginHeading heading="Create your Account" />
          <LoginSubHeading
            setShowSignIn={setShowSignIn}
            showSignIn={showSignIn}
          />
          <LoginInput
            type="text"
            label="Username"
            placeholder="Enter your username"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            className="pt-7"
            id="SignUpUserName"
          />
          <LoginInput
            type="email"
            label="Email"
            placeholder="Enter your email Id"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            className="pt-5"
            id="SignUpEmail"
          />
          <LoginInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="pt-5"
            id="SignUpPassword"
          />

          <button
            className="bg-black w-full text-white rounded-md h-9 font-medium mt-5 hover:bg-slate-800 disabled:bg-slate-600 disabled:cursor-not-allowed"
            type="submit"
            disabled={isRequested}
          >
            SignUp
          </button>
        </form>
      </div>
      <Typer
        title="Welcome to our App!"
        content={[
          "Discover the power of our platform.",
          "Join our community today.",
        ]}
      />
    </div>
  );
}
