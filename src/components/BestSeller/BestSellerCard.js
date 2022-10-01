import React from "react";
import TertiaryHeading from "../UI/Headings/TertiaryHeading";
import StarIcon from "../../icons/star-icon.svg";
import Button from "../UI/Button/Button";
import PlusIcon from "../../icons/plus-icon.svg";
const BestSellerCard = (props) => {
  return (
    <div className="relative after:w-full after:h-3/4 after:bg-lightCyan after:absolute after:bottom-0 after:left-0 after:z-[-1] after:rounded-border-base transition duration-300 hover:-translate-y-5">
      <img src={props.image} className="w-56 mb-8" />
      <div className="rounded-border-base bg-white p-6 shadow-lg">
        <TertiaryHeading>Cammile</TertiaryHeading>
        <div className="flex items-center mb-14">
          <img src={StarIcon} className="w-5 h-5" alt="Star icon." />
          <img src={StarIcon} className="w-5 h-5" alt="Star icon." />
          <img src={StarIcon} className="w-5 h-5" alt="Star icon." />
          <img src={StarIcon} className="w-5 h-5" alt="Star icon." />
          <img src={StarIcon} className="w-5 h-5" alt="Star icon." />
        </div>
        <div className="flex items-center justify-between">
          <TertiaryHeading>$65.00</TertiaryHeading>
          <Button className="w-8 h-8 rounded-full flex items-center justify-center group">
            <img
              src={PlusIcon}
              className="transition duration-500 group-hover:rotate-180"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
