import React from "react";

const SecondaryHeading = (props) => {
  return (
    <h2 className={`leading-tight font-medium text-3xl ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default SecondaryHeading;
