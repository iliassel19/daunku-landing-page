import React from "react";

const FormInput = () => {
  return (
    <input
      className={`flex-1 bg-transparent pl-2 placeholder:text-white placeholder:font-normal focus:outline-none `}
      placeholder="Search plant"
    />
  );
};

export default FormInput;
