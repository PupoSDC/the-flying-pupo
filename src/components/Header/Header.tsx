import { FunctionComponent } from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { default as styles } from "./styles.module.css";

export const Header: FunctionComponent<{
  children: string;
}> = ({ children }) => (
  <header className={styles.header}>
    <div>
      <h1>{children}</h1>
      <Link href="/">
        <FaHome />
      </Link>
    </div>
  </header>
);
