import Image from "next/image";
import React, { useState } from "react";
import { BiExpand } from "react-icons/bi";
import HandleOnMouseMove from "@/utils/hoverEffect";
import RadialGradient from "../ui/radial-gradient";
import { Button } from "../ui/button";

interface Technology {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface Props {
  src: string;
  title: string;
  caption: string;
  description: string;
  id: number;
  tech: Technology[];
}

const ProjectCard: React.FC<Props> = ({
  id,
  src,
  title,
  caption,
  description,
  tech,
}: Props) => {
  const isEven = id % 2 === 0;
  const flexDirectionClass = isEven ? "flex-row-reverse" : "flex-row";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}
      id={"card" + id}
      className={`h-full w-full relative bg-gradient-to-bl from-card to-background border border-zinc-400/80 hover:border-zinc-500 dark:border-zinc-800/80 dark:hover:border-zinc-600 overflow-hidden  rounded-xl`}
    >
      <div
        className={`w-full h-full overflow-hidden med:gap-0 flex  med:flex-col ${flexDirectionClass}`}
      >
        <div className="flex justify-center items-center">
          <Image
            src={src}
            alt={title}
            width={900}
            height={900}
            quality={100}
            className=""
          />
        </div>
        <div className="w-full flex flex-col justify-end p-4 space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h2 className="tracking-tighter text-3xl font-semibold text-primary">
                {title}
              </h2>
              <p className="tracking-wider opacity-70 text-text">{caption}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((technology, i) => (
                <Image
                  key={i}
                  alt={technology.name}
                  width={technology.width}
                  height={technology.height}
                  src={technology.src}
                  title={technology.name}
                  className="w-6 sm:w-5"
                />
              ))}
            </div>
          </div>
          <p className="hidden">{description}</p>
          <Button
            variant="ghost"
            
            className="z-10 text-xl flex items-center justify-center border w-fit h-fit p-1"
            title="Expandir"
          >
            <BiExpand />
          </Button>
        </div>
      </div>
      {/* Gradiente com base na posição do mouse */}
      <RadialGradient mousePosition={mousePosition} />
    </div>
  );
};

export default ProjectCard;
