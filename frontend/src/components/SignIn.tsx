import { useState } from "react";
import { LoginHeading } from "./LoginHeading";
import { LoginInput } from "./LoginInput";
import { LoginSubHeading } from "./LoginSubHeading";
import { SignInInput } from "@ranjan07/communityink-common";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [inputs, setInputs] = useState<SignInInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputs);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-300 to-red-300 h-screen w-1/2 flex justify-center items-center">
      <form
        className="flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <LoginHeading heading="Login into your Account" />
        <LoginSubHeading content="👈 Don't have an account? SignUp" />

        <LoginInput
          type="email"
          label="Email"
          placeholder="Enter your email Id"
          onChange={(e) => {
            setInputs({
              ...inputs,
              email: e.target.value,
            });
          }}
          className="pt-5"
          id="SignInEmail"
        />
        <LoginInput
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={(e) => {
            setInputs({
              ...inputs,
              password: e.target.value,
            });
          }}
          className="pt-5"
          id="SignInPassword"
        />

        <button
          className="bg-black w-full text-white rounded-md h-9 font-medium mt-5 hover:bg-slate-800"
          type="submit"
        >
          SignIn
        </button>
      </form>
    </div>
  );
}
