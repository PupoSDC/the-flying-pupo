import { FunctionComponent } from "react";
import { default as Image } from "next/image";
import { default as NavLink } from "next/link";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";

const PageHeader = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    maxWidth: theme.breakpoints.values.xl,
    height: theme.shape.headerHeight,
    margin: "auto",

    "& > a": {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
    },

    "& > a > img": {
        height: 50,
    },

    "& > a > h1": {
        paddingRight: theme.spacing(2),
    },

    "& > nav": {
        display: "flex",
        flexGrow: 1,
    },

    "& > nav > a": {
        padding: theme.spacing(4),
        textDecoration: "none",
        color: "inherit",
        ...theme.typography.subtitle2,
    },

    "& > nav > a:active": {
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

export const AppHeader: FunctionComponent = () => {

    return (
        <AppBar position="static" color="transparent" component="header">
            <PageHeader>
                <NavLink href={"/"}>
                    <a>
                        <Image
                            src={"/"}
                            height={35}
                            width={112}
                            alt={"the Flying Pupo"}
                        />
                    </a>
                </NavLink>

            </PageHeader>
        </AppBar>
    );
};