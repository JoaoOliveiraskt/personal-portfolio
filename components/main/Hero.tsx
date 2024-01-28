import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="bg-black relative flex flex-col items-center justify-center min-h-screen px-20 sm:px-5 sm:py-5"
    >
      <HeroContent />
    </div>
  );
};

export default Hero;
