import React from "react";
import HeroContent from "../sub/HeroContent";
import BlurBottom from "../sub/BottomBlur";
import BlurTop from "../sub/TopBlur";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:py-5"
    >
      <div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <HeroContent />
    </div>
  );
};

export default Hero;
