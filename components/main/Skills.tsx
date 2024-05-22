import React from "react";
import SliderInfinite from "../sub/Slider";
import Balancer from "react-wrap-balancer";
import CardBg from "../ui/card-background";

const Skills = () => {
  return (
    <div
      id="skills"
      className="overflow-x-hidden relative flex flex-col items-center justify-center w-full h-full px-1 med:py-32 py-60 overflow-hidden"
    >
      <CardBg className="mt-36 ml-36 med:ml-0"/>
      
      <div className="flex flex-col max-w-[60rem] gap-12 sm:gap-10">
        <div className="flex flex-col gap-6 sm:gap-3 z-10">
          <p className="tracking-tighter text-center text-4xl sm:text-3xl font-bold pb-2 bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
            <Balancer>Transformando Ideias em Realidade Digital</Balancer>
          </p>
          <p className="tracking-wide leading-loose text-text font-medium max-w-[500px] mx-auto text-center">
          Aqui você encontra uma lista das principais tecnologias e ferramentas que utilizo para criar novas soluções.
          </p>
         
          <SliderInfinite />
        </div>

      </div>
    </div>
  );
};

export default Skills;
