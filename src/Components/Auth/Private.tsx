import React from "react";
import Login from "./Login";
import { profileProps } from "./Profile";
interface privateProps {
  isLoggedIn: boolean;
  Component: React.ComponentType<profileProps>;
}

export const Private = ({ isLoggedIn, Component }: privateProps) => {
  if (isLoggedIn) {
    return <Component name="nabil" />;
  } else {
    return <Login />;
  }
};

// export default Private;
