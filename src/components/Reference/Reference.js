import React from "react";
import Container from "../UI/Container/Container";
import SecondaryHeading from "../UI/Headings/SecondaryHeading";
import DeskRoomImg from "../../images/desk-room.png";
import LivingRoomImg from "../../images/living-room.png";
import LivingRoomImg2 from "../../images/living-room-2.png";
const Reference = () => {
  return (
    <Container className="text-center">
      <SecondaryHeading className="mb-4 capitalize">
        Interior plant reference
      </SecondaryHeading>
      <p className="mb-8 text-base text-grey-200">
        make your home so comfortable with refreshing plants
      </p>
      <div className="h-[752px] grid grid-cols-2 grid-rows-[repeat(2,1fr)] gap-6">
        <div className="relative w-full">
          <img src={LivingRoomImg} className="h-full w-full" />
          <div className="absolute top-0 left-0  bg-bg-light-black h-full w-full rounded-[32px] flex items-center justify-center">
            <SecondaryHeading className="text-white">
              living room
            </SecondaryHeading>
          </div>
        </div>
        <div>
          <img src={DeskRoomImg} className="h-full" />
        </div>
        <div className="col-[2/3] row-span-full">
          <img src={LivingRoomImg2} className="h-full w-full" />
        </div>
      </div>
    </Container>
  );
};

export default Reference;
