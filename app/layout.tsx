import { FunctionComponent, PropsWithChildren } from "react";
import "@picocss/pico/css/pico.css";
import "./global.css";

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html data-theme="dark">
    <body>{children}</body>
  </html>
);

export const metadata = {
  title: "The Flying Pupo",
};

export default RootLayout;
