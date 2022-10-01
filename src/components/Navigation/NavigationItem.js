import React from "react";

const NavigationItem = (props) => {
  return (
    <li
      className={`${
        props.isActive
          ? "bg-clip-text text-transparent  bg-gradient-to-r from-lightGreen to-lightBlue"
          : "text-white"
      } text-sm font-semibold hover:bg-clip-text hover:text-transparent  hover:bg-gradient-to-r hover:from-lightGreen hover:to-lightBlue transition-colors`}
    >
      <a href="#">{props.children}</a>
    </li>
  );
};

export default NavigationItem;
