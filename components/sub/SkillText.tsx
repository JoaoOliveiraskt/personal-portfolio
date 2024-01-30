"use client";

import React from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { slideInFromRight } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial="hidden" animate="visible"
        variants={slideInFromRight(0.5)}
        className="text-7xl med:text-5xl text-zinc-200 font-medium  text-center max-w-[900px]"
      >
        <Balancer>Coding the future with modern technologies</Balancer>
      </motion.div>
    </div>
  );
};

export default SkillText;
