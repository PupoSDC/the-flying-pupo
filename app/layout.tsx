import "@picocss/pico/css/pico.css";
import { FunctionComponent } from "react";
import "./global.css";

const RootLayout: FunctionComponent = ({ children }) => (
  <html data-theme="dark">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
