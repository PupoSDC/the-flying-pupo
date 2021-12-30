import { StrictMode, useState } from "react";
import { AppProps } from "next/app";
import {
    CacheProvider,
    EmotionCache,
    createEmotionCache,
} from "src/config/emotionCache";
import { theme } from "src/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { reactQueryConfig } from "src/config/reactQuery";

const clientSideEmotionCache = createEmotionCache();

type CustomAppProps = AppProps & {
    emotionCache: EmotionCache;
};

const App = ({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: CustomAppProps) => {
    const [queryClient] = useState(() => new QueryClient(reactQueryConfig))
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