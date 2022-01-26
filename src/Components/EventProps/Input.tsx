import React from "react";
import { Iinput } from "../Types";

const Input = ({ handleChange }: Iinput) => {
  return (
    <div>
      <input type="text" onChange={(event) => handleChange(event)} />
    </div>
  );
};

export default Input;
