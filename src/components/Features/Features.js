import React from "react";
import FreeShippingIcon from "../../icons/freeshipping-icon.svg";
import QuichPaymentIcon from "../../icons/quickpayement-icon.svg";
import SupportIcon from "../../icons/support-icon.svg";
import Container from "../UI/Container/Container";
import FeatureBox from "./FeatureBox";
const Features = () => {
  return (
    <Container className="">
      <section className="my-24 flex items-center justify-between 2xl:mt-0 xl:my-12 xl:flex-wrap slg:gap-12 slg:pl-6">
        <FeatureBox
          image={FreeShippingIcon}
          heading="free shipping"
          text="No charge for each delivery"
        />
        <FeatureBox
          image={QuichPaymentIcon}
          heading="quick payment"
          text="100% secure payment"
        />
        <FeatureBox
          image={SupportIcon}
          heading="24/7 support"
          text="Quick support"
        />
      </section>
    </Container>
  );
};

export default Features;
