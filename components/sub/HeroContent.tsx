"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "./Underline";
import Balancer from "react-wrap-balancer";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import getMonthDifference from "@/utils/developerDate";
import Avatar from "./Avatar";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full z-50">
      <div className="h-full w-full flex flex-col justify-center items-center gap-7 sm:gap-6 text-center ssm:mt-10 pb-16 med:pb-0">
        <div className="tracking-tighter text-7xl  text-primary max-w-[700px] h-auto">
          <h1>
            <Balancer>
              I want to{" "}
              <div className="relative inline-block">
                <span
                  id="underline"
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-green-500"
                >
                  make things
                  <span className="absolute bottom-5 left-12 right-0 sm:left-8 ssm:left-0 sm:bottom-3 ssm:bottom-2">
                    <Underline />
                  </span>
                </span>
              </div>{" "}
              that make a difference.
            </Balancer>
          </h1>
        </div>

        <p className="tracking-wide text-lg text-text  max-w-[700px] sm:text-sm">
          Hello, I&apos;m João, a front-end developer with{" "}
          {getMonthDifference()} months of experience in website. Check out my
          project skills below.
        </p>

        {/*<div variants={slideInFromTop} className="relative m-auto bg-white overflow-hidden p-1 border-2 border-cyan-700 rounded-full w-24 h-24">
          <Avatar width={180} height={100} className="absolute top-0 bottom-0 left-0 right-0 m-auto" />
        </div>*/}

        <div className="flex flex-row justify-between items-center rounded-2xl  gap-5 py-[8px] px-[10px]">
          <div className="flex flex-row items-center justify-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
            <h2 className="text-[15px] tracking-wide text-primary">
              João Oliveira
            </h2>
          </div>
          <button className="cursor-pointer hover:bg-accent py-2  border text-center rounded-xl w-[200px] sm:w-40 transition-colors duration-300">
            <a
              target="_blank"
              href="https://github.com/JoaoOliveiraskt?tab=repositories"
              className="text-primary flex flex-row items-center justify-center gap-3"
            >
              Github
              <HiArrowTopRightOnSquare />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
