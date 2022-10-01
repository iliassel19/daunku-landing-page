import React from "react";
import CareItem from "./CareItem";
import SunIcon from "../../icons/sun-icon.svg";
import DropIcon from "../../icons/drop-icon.svg";
import PotIcon from "../../icons/pot-icon.svg";
import TemperatureIcon from "../../icons/temperature-icon.svg";
const CareList = () => {
  return (
    <ul className="flex flex-col gap-6">
      <CareItem
        icon={SunIcon}
        title="Adjust Lighting"
        text="When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
      />
      <CareItem
        icon={DropIcon}
        title="Don't water too often"
        text="Watering ornamental plants indoors does not have to be done every day."
      />
      <CareItem
        icon={PotIcon}
        title="Don't water too often"
        text="Watering ornamental plants indoors does not have to be done every day."
      />
      <CareItem
        icon={TemperatureIcon}
        title="Fertilize regularly"
        text="The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength"
      />
    </ul>
  );
};

export default CareList;
