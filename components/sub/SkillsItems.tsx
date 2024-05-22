import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  width?: number;
  height?: number;
  index: number;
  background: string;
}

const SkillsDataProvider = ({ src, width, height, background }: Props) => {
  return (
    <div
      className="w-[70px] h-[70px] p-3 rounded-[14px] flex flex-row items-center justify-center shadow-md
      dark:shadow-none shadow-slate-300 border border-zinc-200 dark:border-slate-700 dark:bg-gradient-to-bl from-gray-500 via-gray-700 to-gray-800"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className="w-10 h-10"
      />
    </div>
  );
};

export default SkillsDataProvider;
