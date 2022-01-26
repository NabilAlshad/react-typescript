import React from "react";
import { IButton } from "../Types";

const Button = ({ handleClick }: IButton) => {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 2)}>click me</button>
    </div>
  );
};

export default Button;
