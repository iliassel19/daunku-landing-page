import React from "react";

const TertiaryHeading = (props) => {
  return (
    <h3 className={`capitalize font-medium  ${props.className}`}>
      {props.children}
    </h3>
  );
};

export default TertiaryHeading;
