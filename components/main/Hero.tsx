import React from "react";
import HeroBg from "../ui/HeroBg";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Underline } from "../ui/Underline";
import Balancer from "react-wrap-balancer";
import PresentaionText from "../sub/PresentationText";
import GithubBtn from "../ui/github-btn";

const Hero = () => {
  return (
    <div id="hero" className="relative flex flex-col h-max pt-36 sm:pt-28 px-4">
      {/* Background */}
      <HeroBg />

      <section className="w-full h-full z-50">
        <div className="h-full w-full flex flex-col justify-center items-center gap-5 text-center ssm:mt-10 pb-16 med:pb-0">
          
          {/* Titúlo da sessão */}
          <div className="flex flex-col items-center justify-center gap-2 h-auto">
            <GithubBtn />
            <h1 className="tracking-tighter font-bold leading-tight text-6xl med:text-4xl  max-w-[900px] bg-gradient-to-r from-primary via-primary to-muted-foreground text-transparent bg-clip-text">
              <Balancer>
                Unindo design e código, sigo criando projetos{" "}
                <span id="underline" className="">
                  <span className="relative inline-flex items-end justify-center bg-gradient-to-r from-primary via-primary to-muted-foreground text-transparent bg-clip-text">
                    únicos.
                    <Underline />
                  </span>
                </span>
              </Balancer>
            </h1>

            {/* Texto de apresentação */}
            <PresentaionText />
          </div>

          {/*<div className="relative m-auto bg-white overflow-hidden p-1 border-2 border-cyan-700 rounded-full w-24 h-24">
          <Avatar width={180} height={100} className="absolute top-0 bottom-0 left-0 right-0 m-auto" />
        </div>*/}

          {/* Meu nome */}
          <div className="flex  flex-row justify-between items-center rounded-full  gap-5 py-[8px] px-[14px]">
            <div className="flex flex-row items-center justify-center">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
              <h2 className="text-[15px] tracking-wide text-primary">
                João Oliveira
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
