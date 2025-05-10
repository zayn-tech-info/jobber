import React from "react";
import { Link } from "react-router-dom";
import { OnboardingScreen1 } from "../../utils/index";
import {
  AngelListLogo,
  GrassdorLogo,
  IndeedLogo,
  LinkedInLogo,
  MonsterLogo,
} from "../../utils/index.js";

const OnboardingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="pt-10 px-5 space-y-8">
          <p className="text-xl text-gray-400">
            <Link to="/home">Skip</Link>
          </p>
          <div>
            <img src={OnboardingScreen1} />
          </div>
          <div className="text-2xl font-medium text-center mb-10 my-5">
            <p>Find job offers from the most popular job listing sites </p>
          </div>
          <div className="imagelogo flex justify-center items-center my-10">
            <div className="flex flex-col gap-2 items-center space-y-3">
              <div className="flex gap-5">
                <img src={LinkedInLogo} />
                <img src={AngelListLogo} />
                <img src={GrassdorLogo} />
              </div>
              <div className="flex gap-5 jistify-center items-center">
                <img src={MonsterLogo} />
                <img src={IndeedLogo} />
              </div>
            </div>
          </div>
          <div>
            <Link to="/onboarding2">
              <button className="bg-[#FFBF46] text-white font-medium text-lg py-3 px-10 rounded-md w-full mt-7">
                <p>Next</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
