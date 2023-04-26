import Image from 'next/image'
import React from 'react'
import style from '../styles/educators.module.css'
const FindEducators = ({ data }) => {
    console.log(data.content.educatorList)
    return (
        <div className={`${style.bg} flex flex-col `}>
            <div className='flex justify-evenly p-10'>
                <h1 className='text-black font-bold tracking-widest ml-60 text-2xl'>{data.content.title}</h1>
                <div className='flex'>
                    <Image
                        src={data.content.icon.filename}
                        height={10}
                        width={20}
                        alt='logo'
                    />
                    <input type="text" placeholder='serach for an educator' className='bg-transparent border-b border-gray-500 ml-4 ' />
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    data.content.educatorList.map((res) => {
                        return (
                            <div key={res.id} className='m-10'>
                                <Image
                                    className={style.img}
                                    src={res.img.filename}
                                    width={1000}
                                    height={400}
                                    alt='imgs'
                                    priority={true}
                                />
                                <h1 className='text-black font-semibold tracking-widest my-2'>{res.name}</h1>
                                <span className='text-gray-600 tracking-widest'>{res.desc}</span> <br />
                                <button className='bg-black w-full h-10 my-5 tracking-widest'>VIEW COURSES</button>
                            </div>

                        )
                    })
                }
            </div>
        </div >
    )
}

export default FindEducators