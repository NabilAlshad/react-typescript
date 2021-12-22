import React from "react";
type placeholder = {
  children: string;
};
const Heading = (props: placeholder) => {
  return <div>{props.children}</div>;
};

export default Heading;
