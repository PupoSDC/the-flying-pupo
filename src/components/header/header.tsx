import {
  FunctionComponent
} from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineHome
} from "react-icons/ai";
import {
  default as Link
} from "next/link";
import { cn } from "src/utils/cn";

export const Header: FunctionComponent<{
  title: string;
  className?: string;
}> = ({ title, className }) => (
  <header className={cn(
    "w-full",
    "absolute",
    "flex",
    "justify-end",
    "top-4",
    "text-xl",
    "md:text-3xl",
    className,
  )}>
    <div className="w-full max-w-screen-2xl mx-auto flex justify-between px-2 gap-2 items-center">
      <h1 className="text-slate-200 font-bold flex-1">{title}</h1>

      <Link
        className="text-slate-200 hover:text-slate-400 flex items-center"
        href="/"
      >
        <AiOutlineHome />
      </Link>
      <Link
        className="text-slate-200 hover:text-slate-400 flex items-center"
        href="https://www.instagram.com/puposdc/"
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        className="text-slate-200 hover:text-slate-400 flex items-center"
        href="https://www.linkedin.com/in/puposdc/"
      >
        <AiOutlineLinkedin />
      </Link>
      <Link
        className="text-slate-200 hover:text-slate-400 flex items-center"
        href="https://github.com/PupoSDC"
      >
        <AiOutlineGithub />
      </Link>

    </div>
  </header>
);
