import React from "react";
import Box from "../UI/Box/Box";
const HeaderPoints = (props) => {
  return (
    <>
      <Box
        className={`${props.className} absolute backdrop-blur-[2px] flex justify-center items-center w-11 h-11 rounded-full 2xl:hidden`}
      >
        <span className="w-3 h-3 bg-white rounded-full"></span>
      </Box>
    </>
  );
};

export default HeaderPoints;
