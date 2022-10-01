import React from "react";
import NavigationItem from "./NavigationItem";
const NavigationList = (props) => {
  // console.log(props.menuState);
  return (
    <ul className="flex items-center gap-12">
      <NavigationItem isActive={true}>Home</NavigationItem>
      <NavigationItem isActive={false}>Shop</NavigationItem>
      <NavigationItem isActive={false}>About us</NavigationItem>
      <NavigationItem isActive={false}>Contact</NavigationItem>
    </ul>
  );
};

export default NavigationList;
