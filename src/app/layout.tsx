import { FunctionComponent, PropsWithChildren } from "react";
import "./layout.css";

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html className="dark h-full w-full bg-slate-800">
    <body className="dark min-h-full">{children}</body>
  </html>
);

export const metadata = {
  title: "The Flying Pupo",
};

export default RootLayout;
