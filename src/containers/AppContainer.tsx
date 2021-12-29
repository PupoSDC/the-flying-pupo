import { styled, useTheme } from "@mui/material";
import Head from "next/head";
import { FunctionComponent } from "react";
import { AppHeader } from "./AppHeader";

export type AppHtmlHeadProps = {
    title: string;
    linkTitle: string;
    description: string;
    imageUrl: string;
};

const MainContainer = styled("main")(() => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
}));


export const AppContainer: FunctionComponent<AppHtmlHeadProps> = ({
    title,
    linkTitle,
    description,
    imageUrl,
    children,
}) => {
    const { palette, fontLink } = useTheme();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={linkTitle} key="title" />
                <meta name="description" content={description} key="dec" />
                <meta property="og:description" content={description} key="desc2" />
                <meta property="og:image" content={imageUrl} key="image" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="theme-color" content={palette.primary.main} />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="msapplication-TileColor" content={palette.primary.main} />
                <link rel="stylesheet" href={fontLink} />
                <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />

                )
            </Head>
            <AppHeader />
            <MainContainer>{children}</MainContainer>
        </>
    );
}
