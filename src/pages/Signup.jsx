import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, Mail, Password } from "../utils/index.js";

const Signup = () => {
  const [login, setLogin] = useState(false);

  function renderLogin(e) {
    JSON.stringify(localStorage.setItem("login", true));
    e.preventDefault();
    setLogin(true);
  }

  function renderSignup(e) {
    JSON.stringify(localStorage.setItem("login", false));
    e.preventDefault();
    setLogin(false);
  }

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("login"));
    if (loginStatus) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div>
          <p className="text-4xl font-bold text-center mt-10">
            Job<span className="text-[#8ACB88] ">Search.org</span>
          </p>
          <div className="bg-gray-300 mx-auto flex rounded-md my-7 justify-center items-center w-70">
            <button
              onClick={renderSignup}
              className={
                login
                  ? `flex-1 py-3 font-medium`
                  : `bg-[#FFC727] shadow-xl font-medium  rounded-md flex-1 py-3`
              }
            >
              Register
            </button>
            <button
              onClick={renderLogin}
              className={
                login
                  ? `bg-[#FFC727] shadow-xl font-medium  rounded-md flex-1 py-3`
                  : `flex-1 py-3 font-medium`
              }
            >
              Login
            </button>
          </div>
        </div>
        <div className="mx-auto flex justify-center mt-10">
          <form action="">
            {login ? (
              <div>
                <Form src={User} type="text" placeholder="username" />
                <Form src={Password} type="password" placeholder="password" />
              </div>
            ) : (
              <div>
                <div className="space-y-4">
                  <Form src={User} type="text" placeholder="username" />
                  <Form src={Mail} type="email" placeholder="Email" />
                  <Form src={Password} type="password" placeholder="password" />
                </div>
              </div>
            )}
          </form>
        </div>
        {login ? (
          <div>
            <div className="flex mt-3 items-center gap-2">
              <input type="radio" />
              <p>Remember me next time</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm text-center text-gray-500">
              At least 8 characters, 1 uppercase letter, 1 number, 1 symbol
            </p>
          </div>
        )}

        <div className="w-80 mx-auto my-4 mb-4x">
          <Link to={`${login ? '/jobpreview' : ''}`}>
            <button className="bg-[#FFC727] font-medium cursor-pointer text-lg py-3 px-8 rounded-md w-full mt-7">
              {login ? "Login" : "Sign Up"}
            </button>
          </Link>
        </div>
        {login ? (
          <div>
            <div className="space-y-4 mt-7">
              <p>
                Forgot password?<span className="text-blue-500"> Remember</span>
              </p>
              <p>
                Don't have an account ?{" "}
                <span onClick={renderSignup} className="text-blue-500 cursor-pointer">
                  Register
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <p className="text-sm text-gray-500">
              By Signing up, you agree to the{" "}
              <span className="font-medium">Terms of Service</span> and <br />{" "}
              <span className="font-medium">Privacy Policy</span>{" "}
            </p>
            <p onClick={renderLogin} className="text-center mt-5 my-3">
              Have an account? <span className="text-[#007AFF] cursor-po">Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
