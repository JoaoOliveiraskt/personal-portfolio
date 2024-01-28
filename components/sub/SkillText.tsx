"use client";

import React from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-6xl med:text-3xl text-white font-medium  text-center max-w-[700px]"
      >
        <Balancer>Coding the future with modern technologies</Balancer>
      </motion.div>
    </div>
  );
};

export default SkillText;
