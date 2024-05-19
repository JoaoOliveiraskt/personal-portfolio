"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "./Underline";
import Balancer from "react-wrap-balancer";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import { Button } from "../ui/button";
import PresentaionText from "./PresentationText";

const HeroContent = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full z-50">
      <div className="h-full w-full flex flex-col justify-center items-center gap-12 text-center ssm:mt-10 pb-16 med:pb-0">
        <div className="flex flex-col items-center justify-center gap-5 h-auto">
          <h1 className="tracking-wide font-bold leading-tight text-6xl med:text-3xl  max-w-[900px] bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
            <Balancer>
              Criando coisas que fazem{" "}
              <span id="underline" className="">
                <span className="relative inline-flex items-end justify-center bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
                  a diferença
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
          <Button variant={"ghost"} className="text-primary cursor-pointer h-12 text-center rounded-full w-[160px] 
          sm:w-36 bg-button dark:hover:bg-buttonHover border-2 border-buttonBorder">
            <a
              target="_blank"
              href="https://github.com/JoaoOliveiraskt?tab=repositories"
              className="flex tracking-wider flex-row items-center justify-center gap-2 font-semibold text-base"
            >
              Github
              <HiArrowTopRightOnSquare />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
