"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "./Underline";
import Balancer from "react-wrap-balancer";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import getMonthDifference from "@/utils/developerDate";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex w-full h-full"
    >
      <div className="h-full w-full flex flex-col justify-center items-center gap-6 sm:gap-6 text-center ssm:mt-16">
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="tracking-tighter text-7xl ssm:text-3xl sm:text-5xl font-medium text-zinc-200 max-w-[900px] w-auto h-auto"
        >
          <h1>
            <Balancer>
              I want to{" "}
              <div className="relative inline-block">
                <span
                  id="underline"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
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
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.5)}
          className="tracking-wide text-lg text-gray-400 my-5 max-w-[540px] sm:text-sm"
        >
          <Balancer>
            Hello, I&apos;m João, a front-end developer with{" "}
            {getMonthDifference()} months of experience in
            website. Check out my project skills below.
          </Balancer>
        </motion.p>

        <motion.div
          variants={slideInFromTop}
          className="flex flex-row justify-between gap-5 sm:gap-0 Welcome-box py-[8px] px-[10px] border border-[#ffffff1c] sm:w-full"
        >
          <div className="flex flex-row items-center justify-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
            <h1 className="text-[15px] tracking-wide text-white">
              João Oliveira
            </h1>
          </div>
          <motion.button
            variants={slideInFromLeft(0.5)}
            className="cursor-pointer py-2 button-primary border border-[#ffffff32] text-center text-white rounded-[32px] w-[200px] sm:w-40 transition-colors"
          >
            <a
              target="_blank"
              href="https://github.com/JoaoOliveiraskt?tab=repositories"
              className="flex flex-row items-center justify-center gap-3"
            >
              Github
              <HiArrowTopRightOnSquare />
            </a>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
