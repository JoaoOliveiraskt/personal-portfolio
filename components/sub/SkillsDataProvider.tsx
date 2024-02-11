"use client"

import React from 'react'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillsDataProvider = ({src, width, height, index } : Props) => {

  return (
    <div
        className="w-max h-max rounded-3xl flex flex-row items-center justify-center"
        >
        <Image 
        src={src}
        width={width}
        height={height}
        alt='skill image'
        />
    </div>
  )
}

export default SkillsDataProvider