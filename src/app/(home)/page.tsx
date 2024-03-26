"use client";

import { useEffect, useRef, useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { default as Link } from "next/link";
import { cn } from "src/utils/cn";

const Page = () => {
  const [popped, setPopped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
    setTimeout(() => setPopped(true), 200);
  }, []);

  return (
    <div className="w-full h-full fixed overflow-hidden">
      <video
        className="min-w-full min-h-full max-w-full max-h-full object-cover blur-[2px]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="videos/background.mp4" type="video/mp4" />
      </video>
      <header className="min-w-full absolute flex justify-end pr-2 top-4">
        <Link
          className="text-4xl z-50 mr-1 text-slate-200 hover:text-slate-400"
          href="https://www.instagram.com/puposdc/"
        >
          <AiOutlineInstagram />
        </Link>
        <Link
          className="text-4xl z-50 mr-1 text-slate-200 hover:text-slate-400"
          href="https://www.linkedin.com/in/puposdc/"
        >
          <AiOutlineLinkedin />
        </Link>
        <Link
          className="text-4xl z-50 mr-1 text-slate-200 hover:text-slate-400"
          href="https://github.com/PupoSDC"
        >
          <AiOutlineGithub />
        </Link>
      </header>
      <main
        className={cn(
          "absolute flex flex-col justify-end  top-0 left-0 bottom-0 w-full",
          "bg-slate-800 bg-opacity-80",
        )}
      >
        <nav
          className={cn(
            "flex flex-col align-start justify-end ml-8 mb-8",
            "text-slate-100",
          )}
        >
          <ul className="m-0 p-0 overflow-hidden flex flex-col items-start">
            <li
              className={cn(
                "text-xl font-bold text-slate-100 py-2 translate-y-[250%]",
                "transition duration-500 ease-in-out",
                popped && "translate-y-0",
              )}
            >
              <Link href="logbook">Logbook</Link>
            </li>
            <li
              className={cn(
                "text-xl font-bold text-slate-100 py-2 translate-y-[250%]",
                "transition duration-500 ease-in-out",
                popped && "translate-y-0",
              )}
            >
              <Link href="about-me">About Me</Link>
            </li>
          </ul>
          <hr className="w-48 border-t-1 border-slate-100 my-4 max-w-1/2" />
          <h1 className="text-4xl font-bold text-slate-100">The Flying Pupo</h1>
        </nav>
      </main>
    </div>
  );
};

export default Page;
