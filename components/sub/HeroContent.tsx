"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "./Underline";
import Balancer from "react-wrap-balancer";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import getMonthDifference from "@/utils/developerDate";
import Avatar from "./Avatar";
import { Button } from "../ui/button";

const HeroContent = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full z-50">
      <div className="h-full w-full flex flex-col justify-center items-center gap-14 sm:gap-9 text-center ssm:mt-10 pb-16 med:pb-0">
        <div className="tracking-wid sm:text-5xl text-7xl text-primary max-w-[1320px] h-auto font-medium">
            
                <h1>
                    creating things that make {" "} <br />
                <span id="underline" className="relative">
                   a difference
                    <span className="absolute bottom-5 left-40 sm:left-20 sm:bottom-2">
                      <Underline />
                    </span>
                    
                </span>
              </h1>
            
        </div>

       
          
        <p className="tracking-wider text-xl text-text font  max-w-[700px] ">
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
          <Button className="cursor-pointer hover:bg-accent  hover:text-primary h-12 border text-center rounded-[0.60rem] w-[200px] sm:w-40 transition-colors duration-300">
            <a
              target="_blank"
              href="https://github.com/JoaoOliveiraskt?tab=repositories"
              className="flex flex-row items-center justify-center gap-3"
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
