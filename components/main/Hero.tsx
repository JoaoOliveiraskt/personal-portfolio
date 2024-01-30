import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:py-5"
    >
      <HeroContent />
    </div>
  );
};

export default Hero;
