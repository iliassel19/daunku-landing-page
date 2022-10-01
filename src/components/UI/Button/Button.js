import React from "react";
// text-white py-2 px-6 rounded-[50px]
const Button = (props) => {
  return (
    <button
      className={`${props.className} bg-gradient-to-r from-lightGreen to-lightBlue `}
    >
      {props.children}
    </button>
  );
};

export default Button;
