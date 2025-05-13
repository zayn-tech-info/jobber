import React from "react";
import Salaryslider from "../components/Salaryslider";
import JobModal from "../components/JobModal";
const Jobpreview = () => {
  return (
    <div className="flex justify-center w-3/4 items-center">
      <div className="pl-10">
        <JobModal
          question="What role do you want to see"
          actBtn="Add role title"
          displayKey="title"
        />
        <JobModal
          question="Where do you wish to work"
          actBtn="Add Location"
          displayKey="location"
        />
        <JobModal
          question="What type of job fit you better"
          actBtn="Add type"
          displayKey="jobType"
        />

        <div>
          <Salaryslider />
        </div>

        <div className="flex justify-center items-center gap-15 mt-10">
          <button className="py-1 px-5 bg-gray-300 rounded-md">Cancel</button>
          <button className="bg-[#fbbf24] text-xl font-medium px-7 rounded-md py-1">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobpreview;
