import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import style from '../styles/landingPage.module.css'
import bgImg from '../public/bgImg.webp'
import bgImg2 from '../public/Mobile_Hero.jpg'
const LandingPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // {
  //   <span className={`tracking-widest text-sm text-gray-200 ${isMobile ? 'hidden' : 'block'}`}>{data.content.desc}</span>
  // }
  return (
    <div className=''>
      <div className={`${isMobile ? style.bgImg2 : style.bgImg} relative flex items-center justify-center flex-col text-left `}>
        <div className='sm:inline-block sm:mr-60'>
        <h1 className='text-5xl tracking-widest font-semibold sm:text-lg sm:left-52 sm:top-22 sm:text-4xl '>THE VBP ACADEMY</h1>
        <span className='text-2xl tracking-widest font-semibold sm:font-normal sm:left-52 sm:top-44 sm:text-sm '>JUMP START YOUR NAIL CAREER</span>
        </div>
      </div>
      <div className='bg-white flex justify-center flex-col items-center '>
        <h1 className='sm:text-black sm:font-semibold sm:tracking-widest sm:text-xl sm:m-8 text-black font-semibold tracking-widest text-xl m-8 '>{data.content.title2}</h1>
        <div className='sm:flex sm:m-4 sm:mb-10 sm:flex-wrap '>
          {
            data.content.subdata.map((data) => {
              return (
                <div key={data.id} className='sm:flex sm:flex-col sm:items-center sm:mx-16 sm:px-5 flex justify-center items-center flex-col m-10 mt-0 font-bold' >
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