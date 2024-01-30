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
  description: string;
  subDescription: string;
  tech: Technology[];
}

const ProjectCard: React.FC<Props> = ({
  src,
  title,
  description,
  subDescription,
  tech,
}: Props) => {
  return (
    <div className="projectCardBg overflow-hidden rounded-xl shadow-lg border border-zinc-800 h-full w-[28rem] sm:w-full ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        layout="responsive"
        className="w-full object-contain"
      />

      <div className=" text-white p-8 w-full h-ful flex flex-col gap-1">
        <div className="flex items-center w-full justify-between">
          <h1 className="tracking-tighter text-3xl font-semibold">{title}</h1>
          <button className="text-xl hover:bg-[#434343b3] w-9 h-9 flex items-center justify-center rounded-lg p-1">
            <BiExpand />
          </button>
        </div>
        <p className="tracking-widest text-sm opacity-70">{description}</p>
        <p className="hidden">{subDescription}</p>
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
  );
};

export default ProjectCard;