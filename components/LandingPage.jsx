import Image from 'next/image'
import React from 'react'
import style from '../styles/landingPage.module.css'
const LandingPage = ({ data }) => {
  return (
    <div className='relative'>
      <div className='relative'>
        <div>
          <Image
            src={data.content.bg_img1.filename}
            alt="My Image"
            height={100}
            width={100}
            layout="responsive"
            className={`${style.img}`}
          />
        </div>
        <div className='absolute top-52 left-60 items-center flex flex-col'>
          <h1 className='tracking-widest font-semibold  text-2xl mb-3'>{data.content.title}</h1>
          <span className=' tracking-widest text-sm text-gray-200'>{data.content.desc}</span>
        </div>
      </div>
      <div className='bg-white flex justify-center flex-col items-center '>
        <h1 className='text-black font-semibold tracking-widest text-xl m-8'>{data.content.title2}</h1>
        <div className='flex m-4 mb-10'>
          {
            data.content.subdata.map((data) => {
              return (
                <div key={data.id} className='flex flex-col items-center mx-16 px-5 dars' >
                  <Image
                    src={data.logo.filename}
                    height={50}
                    width={100}
                    alt='icon'
                    className={`${style.svg} mb-4`}
                  />
                  <h3 className='text-gray-900 text-xs leading-5  tracking-widest'>{data.text}</h3>
                  <h3 className='text-gray-900 text-xs leading-5  tracking-widest'>{data.text2}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LandingPage