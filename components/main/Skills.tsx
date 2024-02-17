import React from "react";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import SliderInfinite from "../sub/Slider";

const Skills = () => {

  return (
    <motion.section
      id="skills"
      className="overflow-x-hidden flex space-y-10 flex-col items-center justify-center w-full h-full px-20 med:px-2 med:pt-28 pt-52"
    >
        <SkillText />
      
       <SliderInfinite />
      
    </motion.section>
  );
};

export default Skills;
