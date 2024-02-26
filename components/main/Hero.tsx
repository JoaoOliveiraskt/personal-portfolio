import React from "react";
import HeroContent from "../sub/HeroContent";
import HeroBg from "../sub/HeroBg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col h-max pt-28 px-2"
      >
      <HeroBg />
      <HeroContent />
    </div>
  );
};

export default Hero;
