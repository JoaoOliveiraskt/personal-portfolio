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
      className="w-[70px] h-[70px] p-3 rounded-2xl flex flex-row items-center justify-center shadow-xl 
      dark:shadow-slate-900 shadow-slate-400 border dark:border-slate-700"
      style={{
        backgroundImage: `${background}, url(${src})`,
      }}
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
