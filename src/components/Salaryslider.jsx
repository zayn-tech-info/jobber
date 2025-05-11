import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const Salaryslider = () => {
  const [value, setValue] = useState([1000, 2000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-90 px-5 mt-10 rounded-md">
      <Typography variant="h6">What is your salary range?</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={1000}
        max={10000}
        step={1000}
        sx={{ color: "#fbbf24" }}
      />
      <div className="flex justify-between text-xl font-medium">
        <span>$ {(value[0] / 100).toFixed(0)}K</span>
        <span>$ {(value[1] / 100).toFixed(0)}K</span>
      </div>
    </div>
  );
};

export default Salaryslider;
