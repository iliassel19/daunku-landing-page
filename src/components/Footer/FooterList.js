import React from "react";
import FooterItem from "./FooterItem";
const FooterList = (props) => {
  return (
    <ul className="flex flex-col gap-3">
      <FooterItem link={props.link1} />
      <FooterItem link={props.link2} />
      <FooterItem link={props.link3} />
    </ul>
  );
};

export default FooterList;
