import React from "react";

const defaultTheme = {
  background: {
    primary: "#ffffff",
    secondary: "#cdcdcd",
    terciary: "#eeeeee",
  },
  button: {
    background: {
      primary: "#8c8c8c",
    },
  },
  fontSizes: {
    primary: "2rem",
    secondary: "1.6rem",
    default: "1rem",
    small: "0.8rem",
  },
  fontColors: {
    primary: "#757575",
    secondary: "#ffffff",
    terciary: "#8e8e8e",
  },
  step: {
    background: {
      primary: "#676666",
      secondary: "#ffffff",
    },
  },
  border: {
    primary: "#d6d6d6",
  },
};

const themes = {
  defaultTheme,
};

export const ThemeContext = React.createContext(
  themes.defaultTheme // valor por defecto
);
