import React from "react";
import Salaryslider from "../components/Salaryslider";
const Jobpreview = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5">
        <div>
          <p className="text-lg font-medium py-5">
            What role do you want to see
          </p>
          <div className="space-y-4">
            <div className="flex items-center shadow gap-3 w-40 py-2 px-5 py-2 bg-[#FFBF46] rounded-md justify-center">
              <span className="">Designer</span>
              <ion-icon className="text-2xl" name="close-outline"></ion-icon>
            </div>
            <div className="flex items-center shadow rounded-md gap-2 w-40 py-2 justify-center border-dotted border-1 border-[#FFBF46]">
              <ion-icon name="add-outline"></ion-icon>
              <span className="text-sm">Add job role title</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg font-medium py-5">
            What type of job fit you better
          </p>
          <div className="flex items-center gap-2 w-40 py-2 justify-center shadow rounded-md border-dotted border-1 border-[#FFBF46]">
            <ion-icon name="add-outline"></ion-icon>
            <span className="text-sm">Add location</span>
          </div>
        </div>

        <div>
          <p className="text-lg font-medium py-5">Where do you wish to work?</p>
          <div>
            <div className="space-y-4">
              <div className="flex items-center shadow gap-3 w-40 py-2 px-5 py-2 bg-[#FFBF46] rounded-md justify-center">
                <span className="">Remote</span>
                <ion-icon className="text-2xl" name="close-outline"></ion-icon>
              </div>
              <div className="flex items-center rounded-md shadow  gap-2 w-40 py-2 justify-center border-dotted border-1 border-[#FFBF46]">
                <ion-icon name="add-outline"></ion-icon>
                <span className="text-sm">Add type</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <p className="text-2xl font-medium py-5">
            What's your salary range?
          </p> */}
          <Salaryslider />
        </div>

        <div className="flex justify-center gap-15 mt-10">
          <button className="py-3 px-7 bg-gray-300 rounded-md">Cancel</button>
          <button className="bg-[#fbbf24] text-xl font-medium px-9 rounded-md py-3">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobpreview;
