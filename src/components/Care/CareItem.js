import React from "react";
import TertiaryHeading from "../UI/Headings/TertiaryHeading";

const CareItem = (props) => {
  return (
    <li className="flex items-start gap-4">
      <img src={props.icon} className="w-14 h-14 slg:w-10 slg:h-10" />
      <div>
        <TertiaryHeading className="text-black text-xl">
          {props.title}
        </TertiaryHeading>
        <p className=" text-grey-200">{props.text}</p>
      </div>
    </li>
  );
};

export default CareItem;
