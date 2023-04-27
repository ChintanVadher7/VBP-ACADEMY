import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-7 justify-evenly'>
      <div>
        <h1 className='tracking-widest m-1'>CUSTOMER CARE</h1>
        <h3 className='mx-1 text-sm'>Email US</h3>
        <span className='mx-1 text-sm'>1-888-390-4259</span>
      </div>
      <div>
        <h1 className='tracking-widest font-semibold m-1'>ABOUT US</h1>
        <h1 className='tracking-widest font-semibold m-1'>CONTACT US</h1>
        <h1 className='tracking-widest font-semibold m-1'>BLOGS</h1>
      </div>
      <div>
        <h1 className='tracking-widest font-semibold m-1'>FIND A CLASS</h1>
        <h1 className='tracking-widest font-semibold m-1'>PAYMENT OPTIONS</h1>
        <h1 className='tracking-widest font-semibold m-1'>PRESS</h1>
      </div>
      <div>
        <div>
          <span className='tracking-widest mr-3'>SIGN UP</span>
          <span>(Promise we won’t be a stage-5 clinger)</span>
        </div>
        <div>
          <input type="text" placeholder='Email' className='bg-transparent border-b border-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default Footer