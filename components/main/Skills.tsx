import { Frontend_skill } from "@/constants";
import React, { useState } from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import Image from "next/image";

import { motion } from "framer-motion";

const Skills = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideo = () => {
    const video = document.getElementById("video") as HTMLVideoElement;

    if (isVideoPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <motion.section
      id="skills"
      className="relative flex flex-col items-center justify-center w-full h-max pb-16 pt-40"
    >
      <div className="circle absolute top-60 rounded-full w-[50%] h-[50%]"></div>
        <div className="relative gap-12 overflow-hidden flex flex-col items-center justify-center h-max w-[81%] py-4">
        
          <div>
            <h2 className="text-3xl font-semibold tracking-wide text-zinc-50">
            I&apos;m fascinated by website design
            </h2>
          </div>

        <div className="relative w-full flex items-center justify-center">
          <video
            id="video"
            width="70%"
            height="100%"
            preload="auto"
            autoPlay
            loop
            muted
            className="filter blur-[0px] brightness-50 rounded-3xl  "
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <button
            onClick={handleVideo}
            className="text-5xl text-white absolute z-20 bottom-10 right-72 cursor-pointer"
          >
            {isVideoPlaying ? <FaCirclePause /> : <FaRegPlayCircle /> }
          </button>
        </div>

        <SkillText />
        <div className="flex flex-row justify-around flex-wrap gap-4 items-center max-w-[890px]">
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
