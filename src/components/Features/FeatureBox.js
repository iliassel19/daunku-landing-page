import React from "react";

import TertiaryHeading from "../UI/Headings/TertiaryHeading";
const FeatureBox = (props) => {
  return (
    <div className="flex gap-2 ">
      <img src={props.image} alt={props.alt} className="w-14 h-14" />
      <div>
        <TertiaryHeading className="text-xl">{props.heading}</TertiaryHeading>
        <p className="text-sm text-veryLightGrey font-medium">{props.text}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
