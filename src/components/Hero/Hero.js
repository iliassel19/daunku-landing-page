import React from "react";
import Container from "../UI/Container/Container";
import Form from "../UI/Form/Form";
import PrimaryHeading from "../UI/Headings/PrimaryHeading";
const Hero = () => {
  return (
    <Container className="mt-16 flex flex-col items-center">
      <PrimaryHeading>
        Bring Serenity to Your Place With Interior Plants
      </PrimaryHeading>
      <p className="w-1/2 mt-8 mb-8 font-normal text-base text-white text-center">
        find your dream plant for you home decoration with us, and we will make
        it happen.
      </p>
      <Form buttonSearch={true} />
    </Container>
  );
};

export default Hero;
