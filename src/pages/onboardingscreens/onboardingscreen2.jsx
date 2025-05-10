import React from "react";
import { JobHuntImage } from "../../utils";

import { Link } from "react-router-dom";
const onboardingscreen2 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="pt-10 px-5 space-y-8">
          <p className="text-xl text-gray-400">
            <Link to="/home">Skip</Link>
          </p>
          <div>
            <img src={JobHuntImage} />
          </div>
          <div className="text-2xl font-medium text-center mb-10 my-5">
            <p>
              Track all your job <br /> applicatons and don't get <br /> lost in the process{" "}
            </p>
          </div>

          <div>
            <Link to="/onboarding3">
              <button className="bg-[#FFBF46] text-white font-medium text-lg py-3 px-10 rounded-md w-full mt-7">
                <p>Next</p>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/onboarding1">
              <button className="bg-gray-200 font-medium text-lg py-3 px-10 rounded-md w-full">
                <p>Back</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default onboardingscreen2;
