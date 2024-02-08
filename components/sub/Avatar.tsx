import Image from 'next/image'
import React from 'react'
interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
      <Image
        src="https://github.com/joaoOliveiraskt.png"
        alt="João Oliveira"
        width={40}
        height={40}
        className={`object-contain rounded-full ${className}`}
      />
  )
}

export default Avatar