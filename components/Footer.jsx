import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import svg from '../public/icons8-up-arrow-48.png'
import style from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div className='sm:flex sm:justify-evenly sm:items-center'>
      <div className='sm:flex sm:p-7 sm:justify-evenly sm:flex-row grid grid-rows-2 grid-cols-2'>
        <div className='row-span-1 col-span-3 gap-0 row-start-2 flex justify-center items-center sm:justify-start sm:items-start flex-col'>
          <h1 className='tracking-widest m-1 font-semibold'>CUSTOMER CARE</h1>
          <div className='flex items-center sm:block '>
            <Link href={'/'}> <h3 className='mx-1 text-sm mr-4 sm:mr-0'>Email US</h3></Link >
            <Link href={'/'}> <span className='mx-1 text-sm'>1-888-390-4259</span></Link >
          </div>
        </div>
        <div className='sm:mx-5 sm:mx-10 row-span-1 flex items-center flex-col sm:block'>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold my-5 sm:m-1'>ABOUT US</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold my-5 sm:m-1'>CONTACT US</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold my-5 sm:m-1'>BLOGS</h1></Link>
        </div>
        <div className='mx-5 sm:mx-10 row-span-1 flex flex-col sm:block  '>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold my-5 sm:m-1'>FIND A CLASS</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold my-5 sm:m-1'>PAYMENT OPTIONS</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold my-5 sm:m-1'>PRESS</h1></Link>
        </div>
        <div className='mx-5 sm:mx-10 row-span-1 col-span-3 row-start-1'>
          <div className='flex flex-col items-center sm:items-start'>
            <Link href={'/'} className='m-2 sm:m-1'><span className='tracking-widest mr-3 text-base font-semibold sm:font-normal sm:text-base '>SIGN UP</span></Link>
            <span className='text-sm tracking-widest'>(Promise we won’t be a stage-5 clinger)</span>
          </div>
          <div className=' border-b border-gray-500 flex justify-between items-center '>
            <input type="text" placeholder='Email' className='bg-transparent py-2 w-full' />
            <Image
              className={`invert rotate-90 ${style.svg}`}
              src={svg}
              height={5}
              width={25}
              alt='icon'
            />
          </div>
        </div>
      </div>
      <div className='sm:block flex items-center justify-center '>
        <h4 className='sm:text-sm sm:mb-2 my-3 mx-4'>Privacy Policy</h4>
        <h4 className='sm:text-sm sm:mb-2 my-3 mx-4'>Legal</h4>
        <h4 className='sm:text-sm sm:mb-2 my-3 mx-4'>Service</h4>
      </div>
    </div>
  )
}

export default Footer