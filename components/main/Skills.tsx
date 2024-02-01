import { Frontend_skill } from "@/constants";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="relative flex items-center justify-center w-full min-h-screen px-5 py-20"
    >
   
      <div className="flex flex-col items-center justify-start gap-32 h-full">
        <SkillText />

        <div className="flex flex-row justify-around flex-wrap gap-5 items-center max-w-[550px]">
          {Frontend_skill.map((image, index) => (
            <SkillsDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
      
    </motion.section>
  );
};

export default Skills;
