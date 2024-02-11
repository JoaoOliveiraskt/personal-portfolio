import React from "react";
import HeroContent from "../sub/HeroContent";
import BlurBottom from "../sub/BottomBlur";
import BlurTop from "../sub/TopBlur";
import HeroBg from "../sub/HeroBg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center justify-center h-max pt-44 px-5 sm:pt-32 ssm:pt-10"
    >
      <HeroContent />
      <HeroBg/>
    </div>
  );
};

export default Hero;
