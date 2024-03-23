import { FunctionComponent, PropsWithChildren } from "react";
import "./layout.css";

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html data-theme="dark">
    <body>{children}</body>
  </html>
);

export const metadata = {
  title: "The Flying Pupo",
};

export default RootLayout;
