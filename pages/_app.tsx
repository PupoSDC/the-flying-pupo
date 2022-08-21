import { StrictMode } from "react";
import { AppProps } from "next/app";
import { theme } from "src/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { default as createCache } from "@emotion/cache";
import { CacheProvider, EmotionCache } from "@emotion/react";

const clientSideEmotionCache = createCache({ key: "css" });

type CustomAppProps = AppProps & {
    emotionCache: EmotionCache;
};

const App = ({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: CustomAppProps) => {
    return (
        <StrictMode>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </StrictMode>
    );
}

export default App;