import React from "react";

const FooterItem = (props) => {
  return (
    <li className="text-grey-50 capitalize text-[14px] font-normal transition-colors duration-200 hover:text-white">
      <a href="#">{props.link}</a>
    </li>
  );
};

export default FooterItem;
