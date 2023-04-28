import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import svg from '../public/icons8-up-arrow-48.png'
import style from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div>

      <div className='flex p-7 justify-evenly'>
        <div>
          <h1 className='tracking-widest m-1'>CUSTOMER CARE</h1>
          <Link href={'/'}> <h3 className='mx-1 text-sm'>Email US</h3></Link >
          <Link href={'/'}> <span className='mx-1 text-sm'>1-888-390-4259</span></Link >
        </div>
        <div>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold m-1'>ABOUT US</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold m-1'>CONTACT US</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold m-1'>BLOGS</h1></Link>
        </div>
        <div>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold m-1'>FIND A CLASS</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold m-1'>PAYMENT OPTIONS</h1></Link>
          <Link href={'/'}> <h1 className='tracking-widest font-semibold m-1'>PRESS</h1></Link>
        </div>
        <div>
          <div>
            <Link href={'/'}><span className='tracking-widest mr-3 my-3 '>SIGN UP</span></Link>
            <span className='text-sm'>(Promise we won’t be a stage-5 clinger)</span>
          </div>
          <div className=' border-b border-gray-500 flex justify-between items-center'>
            <input type="text" placeholder='Email' className='bg-transparent py-2' />
            <Image
              className={`invert rotate-90 ${style.svg}`}
              src={svg}
              height={5}
              width={25}
              alt='icon'
            />
          </div>
        </div>
        <div className='ml-10'>
          <h4 className='text-sm mb-2'>Privacy Policy</h4>
          <h4 className='text-sm mb-2'>Legal</h4>
          <h4 className='text-sm mb-2'>Service</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer