"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "./Underline";
import Balancer from "react-wrap-balancer";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import { Button } from "../ui/button";
import Presentaion from "./PresentationText";

const HeroContent = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full z-50">
      <div className="h-full w-full flex flex-col justify-center items-center gap-12 text-center ssm:mt-10 pb-16 med:pb-0">
        <div className="flex flex-col items-center justify-center gap-5 h-auto">
          <h1 className="tracking-tighter font-semibold leading-tight text-6xl sm:text-3xl med:text-3xl text-primary max-w-[900px]">
            <Balancer>
              Creating things that make{" "}
              <span id="underline" className="">
                <span className="relative inline-flex items-end justify-center">
                  a difference
                  <Underline />
                </span>
              </span>
            </Balancer>
          </h1>

          <Presentaion />
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
          <Button className="cursor-pointer h-9 text-center rounded-full w-[120px] sm:w-36 buttonDarkBg">
            <a
              target="_blank"
              href="https://github.com/JoaoOliveiraskt?tab=repositories"
              className="flex tracking-wide flex-row items-center justify-center gap-3 font-semibold"
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
