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
        src="/profileimg5.jpg"
        alt="João Oliveira"
        width={width}
        height={height}
        objectFit='cover'
        className={`object-cover  ${className}`}
      />
  )
}

export default Avatar