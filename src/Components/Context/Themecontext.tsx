import React, { createContext } from "react";
import { Theme } from "./Theme";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}
export const themeContext = createContext(Theme);
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <themeContext.Provider value={Theme}>{children}</themeContext.Provider>
  );
};
