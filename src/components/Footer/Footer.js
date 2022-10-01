import React from "react";
import Container from "../UI/Container/Container";
import Form from "../UI/Form/Form";
import SecondaryHeading from "../UI/Headings/SecondaryHeading";
import TertiaryHeading from "../UI/Headings/TertiaryHeading";
import FooterList from "./FooterList";
const Footer = () => {
  return (
    <div className="mt-28 pt-28 pb-12 bg-gradient-to-br from-lightDarkBlue to-veryDarkBlue">
      <Container className="pb-12 mb-8 border-b border-white flex items-start gap-16">
        <div className="flex-[0_0_20%] flex flex-col gap-4">
          <SecondaryHeading className="text-white text-3xl font-medium">
            Newslatter
          </SecondaryHeading>
          <Form buttonSearch={false} />
        </div>
        <div className="flex-1 grid grid-cols-[repeat(3,135px)_1fr] gap-8 ">
          <div>
            <TertiaryHeading className="text-white mb-8 capitalize text-base">
              Support
            </TertiaryHeading>
            <FooterList link1="about us" link2="careers" link3="blog" />
          </div>
          <div>
            <TertiaryHeading className="text-white mb-8 capitalize text-base">
              Useful links
            </TertiaryHeading>
            <FooterList
              link1="payment & tax"
              link2="team of service"
              link3="privacy policy"
            />
          </div>
          <div>
            <TertiaryHeading className="text-white mb-8 capitalize text-base">
              Our menu
            </TertiaryHeading>
            <FooterList link1="best product" link2="category" link3="" />
          </div>
          <div>
            <TertiaryHeading className="text-white mb-8 capitalize text-base">
              Address
            </TertiaryHeading>
            <FooterList
              link1="JL. Setiabudhi No. 193 Sukasari, Bandung
            West Java, Indonesia"
              link2="hallo@daunku.com"
              link3=""
            />
          </div>
        </div>
      </Container>
      <p className="text-white text-center font-light">
        © 2022 Daunku - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
