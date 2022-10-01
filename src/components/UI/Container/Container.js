import React from "react";

const Container = (props) => {
  return (
    <div className={`${props.className} w-[85%] mx-auto`}>{props.children}</div>
  );
};

export default Container;
