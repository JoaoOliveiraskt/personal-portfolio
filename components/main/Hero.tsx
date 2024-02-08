import React from "react";
import HeroContent from "../sub/HeroContent";
import BlurBottom from "../sub/BottomBlur";
import BlurTop from "../sub/TopBlur";
import HeroBg from "../sub/HeroBg";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:py-5"
    >
      <HeroBg/>
      <HeroContent />
    </div>
  );
};

export default Hero;
