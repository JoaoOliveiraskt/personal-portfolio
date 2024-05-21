import React from "react";
import { motion } from "framer-motion";
import SliderInfinite from "../sub/Slider";
import Balancer from "react-wrap-balancer";
import Divider from "@/components/ui/divider";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="overflow-x-hidden flex flex-col items-center justify-center w-full h-full px-20 med:px-2 med:py-32 py-60"
    >
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
    </motion.section>
  );
};

export default Skills;
