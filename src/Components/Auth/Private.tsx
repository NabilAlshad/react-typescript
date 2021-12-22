import React from "react";
import Login from "./Login";
import { profileProps } from "./Profile";

type privateProps = {
  isLoggedIn: Boolean;
  Component: React.ComponentType<profileProps>;
};
const Private = ({ isLoggedIn, Component }: privateProps) => {
  if (isLoggedIn) {
    return <Component name="nabil"></Component>;
  } else {
    return <Login></Login>;
  }
};

export default Private;
