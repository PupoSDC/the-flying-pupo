"use client"
import { FunctionComponent, useEffect, useState } from "react";
import { default as Link } from "next/link";
import { default as styles } from "./styles.module.css";

type PageProps = {
  params?: {
    num?: string;
  };
  searchParams?: {
    search?: string;
  };
};

const Page: FunctionComponent<PageProps> = () => {
  const [popped, setPopped] = useState(false);
  useEffect(() => {
    setTimeout(() => setPopped(true), 200);
  }, []);

  return (
    <>
      <video className={styles.video} autoPlay muted loop>
        <source src="videos/background.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <nav>
          <ul className={popped ? styles.pop : ""}>
            <li>
              <Link href="logbook">Logbook</Link>
            </li>
            <li>
              <Link href="logbook">Curriculum</Link>
            </li>
          </ul>
          <hr />
          <h1>The Flying Pupo</h1>
        </nav>
      </div>
    </>
  );
};

export default Page;
