import { Frontend_skill } from "@/constants";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-between w-full min-h-screen px-5 pt-16 pb-56 med:pb-64 sm:pb-0 ssm:gap-20"
      
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
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

      <div className="absolute w-full h-auto z-[-10] opacity-30 left-0 right-0 top-0 med:top-28">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
      </div>
    </section>
  );
};

export default Skills;
