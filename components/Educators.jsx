import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from '../styles/educators.module.css'
const Educators = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const handleImageHover = (index) => {
        setHoveredIndex(index)
    }

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className={`${style.bg} flex flex-col `}>
            <div className='flex sm:justify-evenly p-10 '>
                <h1 className='text-black font-bold tracking-widest text-xl sm:text-2xl'>{data.content.title}</h1>
                {
                    !isMobile && (
                        <>
                            <div className='flex'>
                                <Image
                                    src={data.content.icon.filename}
                                    height={10}
                                    width={20}
                                    alt='logo'
                                    className={`${style.img2}`}
                                />
                                <input type="text" placeholder='serach for an educator' className='bg-transparent border-b border-gray-500 ml-4 ' />
                            </div>
                        </>
                    )
                }
            </div>
            <div className='sm:flex sm:flex-wrap sm:justify-center grid grid-cols-2 gap-4  items-center '>
                {
                    data.content.educatorList.map((res, index) => {
                        const slug = res.name.toLowerCase().replace(/\s+/g, '-').slice(0);
                        return (
                            <div key={res.id} className='sm:m-10 m-5 sm:w-auto sm:flex sm:justify-center sm:flex-col '>
                                <Image
                                    className={style.img}
                                    src={hoveredIndex === index ? res.img2.filename : res.img.filename}
                                    width={300}
                                    height={350}
                                    alt='imgs'
                                    priority={true}
                                    onMouseEnter={() => handleImageHover(index)}
                                    onMouseLeave={() => handleImageHover(null)}
                                />
                                <h1 className='text-black sm:font-semibold tracking-widest my-2 sm:h-auto text-xs sm:text-lg font-bold'>{res.name}</h1>
                                <h2 className='text-gray-600 tracking-widest overflow-hidden h-6 sm:h-auto'>{res.desc}</h2>
                                <Link href={`educator/${slug}`}>
                                    <button className='bg-black sm:w-full py-3 my-5 tracking-widest '>VIEW COURSES</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Educators