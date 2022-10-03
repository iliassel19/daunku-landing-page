import React from "react";
import Container from "../UI/Container/Container";
import SecondaryHeading from "../UI/Headings/SecondaryHeading";
import CareList from "./CareList";
import PlantsImg from "../../images/plants.png";
const Care = () => {
  return (
    <Container className="mt-24 flex items-center justify-between slg:flex-col slg:gap-12 slg:pl-6">
      <div className="flex-[0_0_45%] slg:flex-[unset] ">
        <SecondaryHeading className="mb-4 w-2/3 slg:w-full slg:text-center">
          How to care for plants
        </SecondaryHeading>
        <p className="text-base text-grey-200 mb-12 slg:text-center">
          Take care of plants with all your heart
        </p>
        <CareList />
      </div>
      <div className="flex-[0_0_45%]">
        <img src={PlantsImg} />
      </div>
    </Container>
  );
};

export default Care;
