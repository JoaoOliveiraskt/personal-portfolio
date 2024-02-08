import Image from 'next/image'
import React from 'react'
interface AvatarProps {
  className?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({ className, width, height }: AvatarProps) => {
  return (
      <Image
        src="https://github.com/joaoOliveiraskt.png"
        alt="João Oliveira"
        width={width}
        height={height}
        className={`object-contain rounded-full ${className}`}
      />
  )
}

export default Avatar