import React from "react";
import HomePage from "./pages/HomePage";
import SplashScreen from "./pages/SplashScreen";
import { Route, Routes } from "react-router-dom";
import OnboardingScreen from "./pages/onboardingscreens/OnboardingScreen";
import OnboardingScreen2 from "./pages/onboardingscreens/onboardingscreen2";
import OnboardingScreen3 from "./pages/onboardingscreens/onboardingscreen3";
import Signup from "./pages/Signup"
import Jobpreview from "./pages/Jobpreview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding1" element={<OnboardingScreen />} />
        <Route path="/onboarding2" element={<OnboardingScreen2 />} />
        <Route path="/onboarding3" element={<OnboardingScreen3 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobpreview" element={<Jobpreview />} />

        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
