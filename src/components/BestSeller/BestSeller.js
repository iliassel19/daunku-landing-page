import React from "react";
import SecondaryHeading from "../UI/Headings/SecondaryHeading";
import ArrowIcon from "../../icons/arrow-icon.svg";
import BestSellerCard from "./BestSellerCard";
import Product1 from "../../images/product-1.png";
import Product2 from "../../images/product-2.png";
import Product3 from "../../images/product-3.png";
import Container from "../UI/Container/Container";
const BestSeller = () => {
  return (
    <Container className="flex items-center mb-24">
      <div className="flex-[0_0_30%]">
        <SecondaryHeading className="mb-6 capitalize">
          Best seller products
        </SecondaryHeading>
        <a
          href="#"
          className="flex items-center gap-4 transition-all duration-200 hover:gap-6"
        >
          See all collection{" "}
          <img src={ArrowIcon} alt="Arrow right icon" className="w-5 h-5" />
        </a>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <BestSellerCard image={Product1} />
        <BestSellerCard image={Product2} />
        <BestSellerCard image={Product3} />
      </div>
    </Container>
  );
};

export default BestSeller;
