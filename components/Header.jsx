import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import StoryblokClient from 'storyblok-js-client';
import style from '../styles/header.module.css'
const storyblok = new StoryblokClient({
    accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
});

const Header = () => {
    const [header, setHeader] = useState(null)
    useEffect(() => {
        storyblok.get('cdn/stories/header', {
            version: 'published',
        }).then((res) => setHeader(res.data.story.content))
    }, [])
    // console.log(header.LOGO1.filename)
    return (
        <div>
            <div className='flex justify-between p-2 border-b border-white items-center'>
                <div>
                    {
                        header != null && (
                            <Link href={'/'}>
                                <Image
                                    src={header.logo.filename}
                                    height={30}
                                    width={30}
                                    alt='logo'
                                />
                            </Link>
                        )
                    }
                </div>
                <ul className='flex flex-wrap '>
                    <Link href={'/'}> <li className='px-10'>NEW</li></Link>
                    <Link href={'/'}> <li className='px-10'>SALE</li></Link>
                    <Link href={'/'}> <li className='px-10'>ACRYLIC</li></Link>
                    <Link href={'/'}> <li className='px-10'>GEL</li></Link>
                    <Link href={'/'}> <li className='px-10'>TOOLS</li></Link>
                    <Link href={'/'}> <li className='px-10'>BRUSHES</li></Link>
                    <Link href={'/'}> <li className='px-10'>ESSENTIALS</li></Link>
                    <Link href={'/'}> <li className='px-10'>MERCH</li></Link>
                    <Link href={'/'}> <li className='px-10'>SHOP ALL</li></Link>
                </ul>
                <div className='flex'>
                    {
                        header != null && (
                            <Link href={'/'}>
                                <Image
                                    className={`invert m-2 ${style.img}`}
                                    src={header.LOGO1.filename}
                                    height={15}
                                    width={20}
                                    alt='logo'
                                />
                            </Link>
                        )
                    }
                    {
                        header != null && (
                            <Link href={'/'}>
                                <Image
                                    className={`invert m-2 ${style.img}`}
                                    src={header.LOGO2.filename}
                                    height={15}
                                    width={20}
                                    alt='logo'
                                />
                            </Link>
                        )
                    }
                    {
                        header != null && (
                            <Link href={'/'}>
                                <Image
                                    className={`invert m-2 ${style.img}`}
                                    src={header.LOGO3.filename}
                                    height={15}
                                    width={20}
                                    alt='logo'
                                />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header