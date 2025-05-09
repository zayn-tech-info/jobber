import React from "react";
import { SplashImage, SplashImage2 } from "../utils";
import style from "../moduleStyles/Splash.module.css";
const SplashScreen = () => {
  return (
    <div className={style.splashScreen}>
      <div className="w-full h-full">
        <div>
          <p className="text-3xl font-bold">
            The <span className="text-[#FFBF46] ">Best</span> Platform for
            looking for <span className="text-white">Jobs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
