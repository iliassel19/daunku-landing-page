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
    <section>
      <Container className="flex items-center mb-24 2xl:flex-col 2xl:items-stretch">
        <div className="flex-[0_0_30%] 2xl:flex-none ">
          <SecondaryHeading className="mb-6 capitalize 2xl:text-center 2xl:mb-12">
            Best seller products
          </SecondaryHeading>
          <a
            href="#"
            className="flex items-center gap-4 transition-all duration-200 hover:gap-6 2xl:hidden"
          >
            See all collection{" "}
            <img src={ArrowIcon} alt="Arrow right icon" className="w-5 h-5" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between xl:flex-wrap slg:justify-center gap-16">
          <BestSellerCard image={Product1} />
          <BestSellerCard image={Product2} />
          <BestSellerCard image={Product3} />
          <a
            href="#"
            className="items-center gap-4 transition-all duration-200 hover:gap-6 hidden 2xl:flex"
          >
            See all collection{" "}
            <img src={ArrowIcon} alt="Arrow right icon" className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
