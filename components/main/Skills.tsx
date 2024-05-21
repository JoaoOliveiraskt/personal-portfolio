import React from "react";
import { motion } from "framer-motion";
import SliderInfinite from "../sub/Slider";
import Balancer from "react-wrap-balancer";
import Divider from "@/components/ui/divider";

const Skills = () => {
  return (
    <div
      className="overflow-x-hidden relative flex flex-col items-center justify-center w-full h-full px-4 med:py-32 py-60"
    >
      <div className="absolute w-[30rem] h-[25rem] top-64 -z-10 blur-[120px] rounded-full dark:bg-gradient-to-b from-emerald-800 via-slate-900 to-background"></div>
      <div className="flex flex-col max-w-[60rem] gap-12 sm:gap-10">
        <div className="flex flex-col gap-6">
          <p className="tracking-tight text-center text-5xl sm:text-3xl font-medium pb-2 bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
            <Balancer>Criando experiências digitais com...</Balancer>
          </p>
          <Divider className="hidden sm:block" />

          <SliderInfinite />
        </div>

        <Divider className="sm:hidden" />
      </div>
    </div>
  );
};

export default Skills;
