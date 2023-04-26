import Image from 'next/image'
import React from 'react'

const LandingPage = ({ data }) => {
  console.log(data)
  return (
    <div className='relative'>
      <div className='relative'>
        <div div >
          <Image
            src={data.content.bg_img1.filename}
            alt="My Image"
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
        <div className='absolute top-52 left-60 items-center flex flex-col'>
          <h1 className='tracking-widest font-semibold  text-2xl mb-3'>{data.content.title}</h1>
          <span className=' tracking-widest text-sm text-gray-200'>{data.content.desc}</span>
        </div>
      </div>
      <div className='bg-white flex justify-center '>
        <h1 className='text-black font-semibold tracking-widest text-xl m-8'>{data.content.title2}</h1>
      </div>
    </div>
  )
}

export default LandingPage