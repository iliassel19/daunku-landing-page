import React from "react";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";
import Box from "../UI/Box/Box";
import HeaderPoints from "./HeaderPoints";

const Header = () => {
  return (
    <header className="relative h-[928px] bg-[url('./images/hero-img.png')] bg-cover ">
      <HeaderPoints className="top-[38%] left-[6%]" />
      <HeaderPoints className="top-[55%] left-[11%]" />
      <HeaderPoints className="top-[58%] right-[7%]" />
      <Box className=" rounded-3xl pt-5 pl-4 pr-6 pb-4 text-white font-bold absolute top-[45%] right-[2%] backdrop-blur-[5px]">
        <h2 className="text-xl">$65.00</h2>
        <p className="tracking-[1px]">Dracena Fragnas</p>
      </Box>
      <Navigation />
      <Hero />
      <span className="block h-[10%] w-[120%] bg-white blur-lg absolute -bottom-12 -left-4"></span>
    </header>
  );
};

export default Header;
