import { ThemeOptions, createTheme } from "@mui/material";

const BASE_SPACING_UNIT = 8;
const spacing = BASE_SPACING_UNIT;
const ROBOTO_FONT = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";

export const baseThemeConfig: ThemeOptions = {
  spacing,
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  shape: {
    borderRadius: BASE_SPACING_UNIT,
    headerHeight: BASE_SPACING_UNIT * 8,
  },
  fontLink: ROBOTO_FONT,
};

export const baseTheme = createTheme(baseThemeConfig);