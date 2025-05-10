import React from "react";
import { OnboardingScreen2 } from "../../utils";
import { Link } from "react-router-dom";
const onboardingscreen3 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="pt-  px-5 space-y-5">
          <p className="text-xl text-gray-400">
            <Link to="/home">Skip</Link>
          </p>
          <div className="h-70 mb-5">
            <img src={OnboardingScreen2} />
          </div>
          <div className="text-2xl font-medium text-center mb-5 my-2">
            <p>
              Start applying and <br /> get a Job Now!
            </p>
          </div>

          <div>
            <Link to="/onboarding3">
              <button className="bg-[#007AFF] text-white font-medium text-lg py-3 px-10 rounded-md w-full mt-3">
                <p>Connect with Linkedin</p>
              </button>
            </Link>
          </div>
          <p className="text-center">OR</p>
          <div className="flex gap-10 justify-center items-center">
            <div>
              <Link to="/onboarding1">
                <button className="bg-gray-200 font-medium text-md py-2 px-8 rounded-md w-full">
                  <p>Back</p>
                </button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <button className="bg-[#FFBF46]  font-medium text-lg py-2 px-7 rounded-md w-full">
                  <p>Sign In/Up</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default onboardingscreen3;
