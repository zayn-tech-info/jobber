import React from "react";
import HomePage from "./pages/HomePage";
import SplashScreen from "./pages/SplashScreen";
import { Route, Routes } from "react-router-dom";
import OnboardingScreen from "./pages/onboardingscreens/OnboardingScreen";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding1" element={<OnboardingScreen />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
