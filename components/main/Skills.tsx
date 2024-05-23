import React from "react";
import SliderInfinite from "../sub/Slider";
import Balancer from "react-wrap-balancer";
import CardBg from "../ui/card-background";

const Skills = () => {
  return (
    <div
      id="skills"
      className="overflow-x-hidden relative flex flex-col items-center justify-center w-full h-full px-1 med:py-32 pt-60 pb-32 overflow-hidden"
    >
      {/* Background */}
      <CardBg className="mt-36 ml-36 med:ml-0" />

      <div className="flex flex-col max-w-[60rem] gap-12 sm:gap-10">
        <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-3 z-10">
          {/* Titúlo da sessão */}
          <p className="tracking-tighter max-w-[40rem] text-center text-4xl sm:text-3xl font-bold pb-2 bg-gradient-to-r from-primary via-primary to-secondary text-transparent bg-clip-text">
            <Balancer>Transformando Ideias em Realidade Digital</Balancer>
          </p>

          {/* Descrição da sessão */}
          <p className="tracking-wide leading-loose text-muted-foreground font-medium max-w-[500px] mx-auto text-center">
            <Balancer>
              Aqui você encontra uma lista das principais tecnologias e
              ferramentas que utilizo para criar novas soluções.
            </Balancer>
          </p>

          {/* icones da sessão */}
          <SliderInfinite />
        </div>
      </div>
    </div>
  );
};

export default Skills;
