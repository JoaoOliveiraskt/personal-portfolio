import Image from "next/image";
import React from "react";
import { BiExpand } from "react-icons/bi";

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
  return (
    <div
      id={"card" + id}
      className="overflow-hidden rounded-[30px] shadow-xl h-full w-[30rem] sm:w-full"
    >
      <div className="bg-card projectCardBg overflow-hidden">
        <div className="m-4">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-3xl"
          />
        </div>
        <div className="p-6 w-full h-ful flex flex-col gap-3">
          <div className="flex items-center w-full justify-between">
            <h1 className="tracking-tighter text-3xl font-semibold text-primary">
              {title}
            </h1>
            <button className="text-xl hover:bg-accent w-9 h-9 flex items-center justify-center rounded-lg border">
              <BiExpand />
            </button>
          </div>
          <p className="tracking-wider opacity-70 text-text">{caption}</p>
          <p className="hidden">{description}</p>
          {tech.map((technology, i) => (
            <Image
              className="hidden"
              key={i}
              alt={technology.name}
              width={technology.width}
              height={technology.height}
              src={technology.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
