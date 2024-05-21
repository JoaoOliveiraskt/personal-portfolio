import React from "react";
import HeroContent from "../sub/HeroContent";
import HeroBg from "../sub/HeroBg";
import CardBg from "../ui/card-background";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col h-max pt-36 sm:pt-28 px-4"
      >
      <HeroBg />
      <HeroContent />
    </div>
  );
};

export default Hero;
