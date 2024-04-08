import Image from 'next/image'
import React from 'react'

const PhotoGrid = () => {
  return (
    <div className='custom-grid max-w-[476px] h-fit gap-2 pt-4 photogrid-mq'>
        <Image src="/images/image1.svg" className='rounded-md' height={214} width={225} alt='photo'/>
        <Image src="/images/image2.svg" className='rounded-md' height={214} width={225} alt='photo'/>
        <Image src="/images/image3.svg" className='rounded-md' height={214} width={225} alt='photo'/>
        <Image src="/images/image4.svg" className='rounded-md' height={214} width={225} alt='photo'/>
    </div>
  )
}

export default PhotoGrid