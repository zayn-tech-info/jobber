import React from "react";
import { SplashImage, SplashImage2 } from "../utils";
import style from "../moduleStyles/Splash.module.css";
import { Link } from "react-router-dom";
const SplashScreen = () => {
  return (
    <div className={style.splashScreen}>
      <div className="w-full h-full">
        <div className={style.splashImage}>
          <div className="text-white flex flex-col p-3 justify-center items-center">
            <span className="text-[#FFBF46]">Job</span>
            <p>Searching</p>
          </div>
        </div>
        <div className="mt-20 mx-auto flex justify-center items-center pt-10">
          <p className="text-5xl font-bold">
            The <span className="text-[#FFBF46] ">Best</span> <br />
            Platform to <br />
            looking for <br />
            <span className="text-white">Jobs</span>
          </p>
        </div>
        <div className="mb-5 h-60">
          <img src={SplashImage2} />
        </div>
        <div className="text-white font-medium text-center text-2xl">
          <Link>
            <p>Slide to Start {">>"}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
