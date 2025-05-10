import React from "react";


const Form = ({src, type, placeholder}) => {
  return (
    <div>
      <div className="flex items-center my-2 gap-4">
        <img src={src} />
        <input className="border-1 outline-0 px-3 py-2 rounded-sm border-gray-500 w-70" type={type} placeholder={placeholder}/>
      </div>
    </div>
  );
};

export default Form;
