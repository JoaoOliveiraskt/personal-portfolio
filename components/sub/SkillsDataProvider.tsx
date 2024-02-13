import React from 'react';
import Image from 'next/image';

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
      className="w-16 h-16 p-3 rounded-xl flex flex-row items-center justify-center shadow-xl"
      style={{
        backgroundImage: `${background}, url(${src})`,
      }}
    >
      <Image src={src} width={width} height={height} alt='skill image' />
    </div>
  );
};

export default SkillsDataProvider;
