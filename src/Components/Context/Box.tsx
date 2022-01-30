import React, { useContext } from "react";
import { themeContext } from "./Themecontext";
const Box = () => {
  const theme = useContext(themeContext);

  return (
    <div style={{ background: theme.primary.main, color: theme.primary.text }}>
      Theme context
    </div>
  );
};

export default Box;
