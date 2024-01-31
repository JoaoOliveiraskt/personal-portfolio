import Image from 'next/image'
import React from 'react'

const Avatar = () => {
    
  return (
    <div className='flex items-center justify-center'>
        <Image src="https://github.com/joaoOliveiraskt.png"  alt="João Oliveira" 
        width={40}
        height={30}
        className='object-contain rounded-full'
        />
    </div>
  )
}

export default Avatar