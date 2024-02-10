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
        className="relative text-center max-w-[900px]"
      >
        <div className="space-y-6 tracking-wider">
          <p className="uppercase text-zinc-100 text-lg"><Balancer>What can I offer</Balancer></p>
         
        </div>
      </motion.div>
    </div>
  );
};

export default SkillText;
