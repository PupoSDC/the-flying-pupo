"use client"
import { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
    setTimeout(() => setPopped(true), 200);
  }, []);

  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="videos/background.mp4" type="video/mp4" />
      </video>
      <header>
        <Link href="https://www.instagram.com/puposdc/">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/puposdc/">
          <AiOutlineLinkedin />
        </Link>
        <Link href="https://github.com/PupoSDC">
          <AiOutlineGithub />
        </Link>
      </header>
      <main>
        <nav>
          <ul className={popped ? styles.pop : ""}>
            <li>
              <Link href="logbook">Logbook</Link>
            </li>
            <li>
              <Link href="about-me">About Me</Link>
            </li>
          </ul>
          <hr />
          <h1>The Flying Pupo </h1>
        </nav>
      </main>
    </div>
  );
};

export default Page;
