import React from "react";
import Container from "../UI/Container/Container";
import Form from "../UI/Form/Form";
import PrimaryHeading from "../UI/Headings/PrimaryHeading";
const Hero = () => {
  return (
    <div className="max-w-[1440px] ">
      <Container className="mt-16 flex flex-col items-center z-20">
        <PrimaryHeading>
          Bring Serenity to Your Place With Interior Plants
        </PrimaryHeading>
        <p className="w-1/2 mt-8 mb-8 font-normal text-base text-white text-center xl:w-3/4 md:w-[85%] z-20">
          find your dream plant for you home decoration with us, and we will
          make it happen.
        </p>
        <Form buttonSearch={true} />
      </Container>
    </div>
  );
};

export default Hero;
