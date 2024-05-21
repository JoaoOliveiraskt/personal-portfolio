import Image from "next/image";
import React, { useState } from "react";
import { BiExpand } from "react-icons/bi";
import HandleOnMouseMove from "@/utils/hoverEffect";
import RadialGradient from "../ui/radial-gradient";

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
      className={`relative bg-gradient-to-bl from-card to-background border border-zinc-200 dark:border-zinc-800 overflow-hidden  rounded-xl h-full w-full`}
    >
      <div
        className={`w-full h-full overflow-hidden gap-5 med:gap-0 flex items-center med:flex-col ${flexDirectionClass}`}
      >
        <div className="m-2 flex items-center justify-center">
          <Image
            src={src}
            alt={title}
            title={title}
            width={1600}
            height={100}
            quality={100}
            className="rounded-3xl"
          />
        </div>
        <div className="w-full flex flex-col p-6 space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h1 className="tracking-tighter text-3xl font-semibold text-primary">
                {title}
              </h1>
              <p className="tracking-wider opacity-70 text-text">{caption}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:hidden">
              {tech.map((technology, i) => (
                <Image
                  key={i}
                  alt={technology.name}
                  width={technology.width}
                  height={technology.height}
                  src={technology.src}
                  title={technology.name}
                  className="w-8 h-auto"
                />
              ))}
            </div>
          </div>
          <p className="hidden">{description}</p>
          <button
            className="z-10 text-xl hover:bg-accent w-9 h-9 flex items-center justify-center rounded-lg border"
            title="Expandir"
          >
            <BiExpand />
          </button>
        </div>
      </div>
      {/* Gradiente com base na posição do mouse */}
      <RadialGradient mousePosition={mousePosition} />
    </div>
  );
};

export default ProjectCard;
