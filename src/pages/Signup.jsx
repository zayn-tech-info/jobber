import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { User, Mail, Password } from "../utils/index.js";

const signup = () => {
  return (
    <div>
      <div>
        <div>
          <p className="text-4xl font-bold text-center mt-10">
            Job<span className="text-[#8ACB88] ">Search.org</span>
          </p>
          <div className="bg-gray-300 mx-auto flex rounded-md my-7 justify-center items-center w-70">
            <button className="bg-[#FFC727] shadow-xl font-medium  rounded-md flex-1 py-3">
              Register
            </button>
            <button className="flex-1 py-3 font-medium">Login</button>
          </div>
        </div>
        <div className="mx-auto flex justify-center my-12">
          <div className="space-y-4">
            <Form src={User} type="text" placeholder="username" />
            <Form src={Mail} type="email" placeholder="username" />
            <Form src={Password} type="passoword" placeholder="username" />
          </div>
        </div>
        <p className="text-sm text-center text-gray-500">
          At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
        </p>

        <div className="w-80 mx-auto my-4 mb-4x">
          <Link to="/onboarding2">
            <button className="bg-[#FFC727] font-medium text-lg py-3 px-8 rounded-md w-full mt-7">
              <p>Sign Up</p>
            </button>
          </Link>
        </div>
        <div className="text-center mt-5">
          <p className="text-sm">
            By Signing up, you agree to the{" "}
            <span className="font-medium">Terms of Service</span> and <br />{" "}
            <span className="font-medium">Privacy Policy</span>{" "}
          </p>
        </div>
        <p className="text-center mt-5 my-3">Have an account? <span className="text-[#007AFF] ">Login</span></p>
      </div>
    </div>
  );
};

export default signup;
