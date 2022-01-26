import React from "react";
type oscarProps = {
  children: React.ReactNode;
};
const Oscar: React.FC<oscarProps> = (props) => {
  return <div>{props.children}</div>;
};

export default Oscar;
