import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import StoryblokClient from 'storyblok-js-client';
import style from '../styles/header.module.css'
import logo from '../public/logo.png'
import serachLogo from '../public/search-interface-symbol.png'
import profile from '../public/Icon_Profile.svg'
import cart from '../public/shopping-cart.png'
import menu from '../public/icons8-menu-50.png'
import Example from './NavBar';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!active);
    };
    console.log(active)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    console.log(isMobile)
    return (
        <Example/>
        )
}

export default Header
{/* <div className={`sm:flex sm:flex-row  sm:m-8 sm:justify-evenly  flex flex-col-reverse items-center `}>
<div className={`m-2`}>
    <Image
    className={`${style.logo}`}
        src={logo}
        width={40}
        height={40}
        alt='logo'
    />
</div>
<ul className={`sm:flex  sm:items-center justify-center text-center ${isMobile & active && ('hidden')} `}>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>NEW</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>SALE</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>ACRYLIC</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>GEL</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>TOOLS</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>BRUSHES</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>ESSENTIALS</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>MERCH</li></Link>
    <Link href={'/'}> <li className='sm:px-10 my-10 sm:m-0 font-bold sm:font-normal'>SHOP ALL</li></Link>
</ul>
<div className={`sm:flex sm:justify-center sm:items-center  justify-evenly my-10 sm:my-0 sm:mr-8 ${isMobile && ('flex items-center')}`}>
    <Link href={'/'}>
        <Image
            className={`invert m-2 ${style.img}`}
            src={serachLogo}
            height={15}
            width={20}
            alt='logo'
        />
    </Link>
    <Link href={'/'}>
        <Image
            className={`invert m-2 ${style.img}`}
            src={profile}
            height={15}
            width={20}
            alt='logo'
        />
    </Link>
    <Link href={'/'}>
        <Image
            className={`invert m-2 ${style.img}`}
            src={cart}
            height={15}
            width={20}
            alt='logo'
        />
    </Link>
    {
        isMobile && (
            <button onClick={toggleActive}>
                <Image
                    className={`invert m-2 ${style.img}`}
                    src={menu}
                    height={15}
                    width={20}
                    alt='logo'
                />
            </button>
        )
    }

</div>
</div> */}