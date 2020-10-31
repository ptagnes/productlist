import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
interface ThemeProps {
  children: ReactNode;
}
const theme = {
  colors: {
    default: "#19a276",
    lightgray: "#eee",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
