import { useState } from "react";
import { LoginHeading } from "./LoginHeading";
import { LoginInput } from "./LoginInput";
import { LoginSubHeading } from "./LoginSubHeading";
import { SignUpInput } from "@ranjan07/communityink-common";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export function SignUp() {
  const [inputs, setInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputs);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-screen w-1/2 flex justify-center items-center">
      <form
        className="flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <LoginHeading heading="Create your Account" />
        <LoginSubHeading content="Already have an account? Sign In 👉" />
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
          className="bg-black w-full text-white rounded-md h-9 font-medium mt-5 hover:bg-slate-800"
          type="submit"
        >
          SignUp
        </button>
      </form>
    </div>
  );
}
