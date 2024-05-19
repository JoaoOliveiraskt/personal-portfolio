import React from "react";
import { motion } from "framer-motion";
import SliderInfinite from "../sub/Slider";
import Balancer from "react-wrap-balancer";


const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="overflow-x-hidden flex space-y-10 flex-col items-center justify-center w-full h-full px-20 med:px-2 med:pt-28 pt-52"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative text-center">
          <div className="space-y-6 tracking-wider">
            <p className=" text-primary text-xl sm:text-base font-medium">
              <Balancer>Criando experiências digitais com...</Balancer>
            </p>
          </div>
        </div>
      </div>
    
      <SliderInfinite />
    </motion.section>
  );
};

export default Skills;
