import React from "react";

const Box = (props) => {
  return (
    <div className={`${props.className} bg-bg-light-white border border-white`}>
      {props.children}
    </div>
  );
};

export default Box;
