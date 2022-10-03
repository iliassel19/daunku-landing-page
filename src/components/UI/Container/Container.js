import React from "react";

const Container = (props) => {
  return (
    <div className={`${props.className} w-[85%] mx-auto md:w-[95%]`}>
      {props.children}
    </div>
  );
};

export default Container;
