import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function GithubBtn() {
  return (
    <button className="dark:bg-slate-800 bg-zinc-100 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-100 rounded-full p-px leading-6  inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>

      <Link
        className="relative border border-slate-300 dark:border-none flex space-x-2 items-center z-10 rounded-full dark:bg-zinc-950  bg-slate-200 py-[6px] px-4 ring-1 ring-white/10 "
        href={"https://github.com/JoaoOliveiraskt"}
        target="_blank"
      >
        <span className="text-primary text-sm ">Confira meu Github</span>
        <LuArrowUpRight />
      </Link>

      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-400/0 via-indigo-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}
