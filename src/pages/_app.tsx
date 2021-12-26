import { StrictMode } from "react";
import { AppProps } from "next/app";
import {
    CacheProvider,
    EmotionCache,
    createEmotionCache,
} from "src/config/emotionCache";
import { widuTheme } from "src/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

type CustomAppProps = AppProps & {
    emotionCache: EmotionCache;
};

const App = ({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: CustomAppProps) => (
    <StrictMode>
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={widuTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    </StrictMode>
);

export default App;