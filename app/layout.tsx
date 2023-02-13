import "@picocss/pico/css/pico.css";
import { FunctionComponent } from "react";
import "./global.css";

const RootLayout: FunctionComponent = ({ children }) => (
  <html data-theme="dark">
    <body>{children}</body>
  </html>
);

export const metadata = {
  title: 'The Flying Pupo',
};

export default RootLayout;
