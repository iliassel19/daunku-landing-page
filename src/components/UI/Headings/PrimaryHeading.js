import React from "react";

const PrimaryHeading = (props) => {
  return (
    <h1
      className={
        "text-center font-bold text-white leading-[1.2] text-5xl 2xl:text-4xl  capitalize" 
      }
    >
      {props.children}
    </h1>
  );
};

export default PrimaryHeading;
