import React from "react"; 
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HomePage claassName="bg-gray-100 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Jobber</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your one-stop solution for job management.
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
        <div className="mt-8">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </HomePage>
    </>
  );
}

export default App;
