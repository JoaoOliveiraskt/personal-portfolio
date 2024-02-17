import Image from "next/image";
import React, { useState } from "react";
import { BiExpand } from "react-icons/bi";
import HandleOnMouseMove from "@/utils/hoverEffect";

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

const CardProject: React.FC<Props> = ({
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
      className={`relative border bg-card shadow-md dark:bg-transparent dark:border-none med:border border-zinc-200 dark:border-zinc-800 overflow-hidden rounded-xl h-full w-full`}
    >
      <div
        className={` w-full h-full overflow-hidden gap-5 med:gap-0 flex items-center med:flex-col-reverse ${flexDirectionClass}`}
      >
        <div className="m-2 flex items-center justify-center">
          <Image
            src={src}
            alt={title}
            title={title}
            width={1800}
            height={100}
            quality={100}
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col p-6 space-y-10">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="tracking-tighter text-3xl font-semibold text-primary">
                {title}
              </h1>
              <p className="tracking-wider opacity-70 text-text">{caption}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:hidden">
              {tech.map((technology, i) => (
                <Image
                  className=""
                  key={i}
                  alt={technology.name}
                  width={technology.width}
                  height={technology.height}
                  src={technology.src}
                  title={technology.name}
                />
              ))}
            </div>
          </div>
          <p className="hidden">{description}</p>
          <button className="z-10 text-xl hover:bg-accent w-9 h-9 flex items-center justify-center rounded-lg border">
            <BiExpand />
          </button>
        </div>
      </div>
      {/* Gradiente com base na posição do mouse */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.07), transparent)`,
        }}
      ></div>
    </div>
  );
};

export default CardProject;
