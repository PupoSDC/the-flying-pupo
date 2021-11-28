import React from 'react';
import { Helmet } from 'react-helmet';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
});

export const wrapRootElement = ({ element }) => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Helmet>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {element}
        </ThemeProvider>
    </>
);