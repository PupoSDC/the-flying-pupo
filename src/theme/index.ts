import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";    
import { baseThemeConfig } from "./baseTheme";
import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        fontLink: string;
    }
  
    interface ThemeOptions {
        fontLink: string;
    }
  }
  
  export const widuTheme = createTheme({
    ...baseThemeConfig,
  });