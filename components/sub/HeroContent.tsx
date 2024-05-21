"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "./Underline";
import Balancer from "react-wrap-balancer";
import { LuArrowUpRight } from "react-icons/lu";
import PresentaionText from "./PresentationText";
import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full z-50">
      <div className="h-full w-full flex flex-col justify-center items-center gap-12 text-center ssm:mt-10 pb-16 med:pb-0">
        <div className="flex flex-col items-center justify-center gap-5 h-auto">
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

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <h1 className="tracking-tighter font-bold leading-tight text-6xl med:text-4xl  max-w-[900px] bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
            <Balancer>
            Unindo design e código,  sigo criando projetos{" "}
              <span id="underline" className="">
                <span className="relative inline-flex items-end justify-center bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
                únicos.
                  <Underline />
                </span>
              </span>
            </Balancer>
          </h1>

          <PresentaionText />
        </div>

        {/*<div className="relative m-auto bg-white overflow-hidden p-1 border-2 border-cyan-700 rounded-full w-24 h-24">
          <Avatar width={180} height={100} className="absolute top-0 bottom-0 left-0 right-0 m-auto" />
        </div>*/}

        <div className="flex  flex-row justify-between items-center rounded-full  gap-5 py-[8px] px-[14px]">
          <div className="flex flex-row items-center justify-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
            <h2 className="text-[15px] tracking-wide text-primary">
              João Oliveira
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
