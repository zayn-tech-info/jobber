import React from "react";
import HomePage from "./pages/HomePage";
import SplashScreen from "./pages/SplashScreen";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SplashScreen />} /> 
      </Routes>
    </>
  );
}

export default App;
