import { StrictMode, useMemo, useState } from "react";
import { AppProps } from "next/app";
import {
    CacheProvider,
    EmotionCache,
    createEmotionCache,
} from "src/config/emotionCache";
import { theme } from "src/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Hydrate, QueryClientProvider } from 'react-query'
import { getQueryClient } from "src/config/reactQuery";

const clientSideEmotionCache = createEmotionCache();

type CustomAppProps = AppProps & {
    emotionCache: EmotionCache;
};

const App = ({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: CustomAppProps) => {
    const queryClient = useMemo(getQueryClient, []);
    return (
        <StrictMode>
            <CacheProvider value={emotionCache}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </Hydrate>
                </QueryClientProvider>
            </CacheProvider>
        </StrictMode>
    );
}

export default App;