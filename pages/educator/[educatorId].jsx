import Carousal from '@/components/Carousel'
import Carousel from '@/components/Carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StoryblokClient from 'storyblok-js-client'
import style from '../../styles/educator.module.css'
import moment from 'moment/moment'
const Educator = (props) => {
    const data = props.story
    console.log(data);
    const string = data.content.title.split(" ")[0].charAt(0).toUpperCase() + data.content.title.split(" ")[0].slice(1).toLowerCase();
    const slides = [
        data.content.slide1.filename,
        data.content.slide2.filename
    ]
    return (
        <div>
            <div className=' flex  flex-col items-center '>
                <div className='flex items-start flex-col '>
                    <div className='flex items-center'>
                        <h1 className={`mx-14 font-bold  ${style.styles}`}>{data.content.title}</h1>
                        <Image
                            className='mx-14'
                            src={data.content.img.filename}
                            width={300}
                            height={300}
                            alt='img'
                        />
                    </div>
                    <div className='mx-14 m-6 '>
                        <h1 className={`${style.spacing} font-bold m `}>{`${data.content.title}'S NEXT COURSE`}</h1>
                        {
                            data.content.upcoming.length === 0 && (
                                <span className='my-2 text-gray-300'>{string} has no upcoming courses</span>
                            )
                        }
                    </div>
                </div>
                {
                    data.content.upcoming.length !== 0 && (
                        <>
                            {
                                data.content.upcoming.map((res) => {
                                    return (
                                        <div key={res.id} className='flex items-center justify-center'>
                                            <div className='w-6/12'>
                                                <div className='flex upcomng'>
                                                    <h1 className='text-sm font-semibold m-3'>{res.upcomingtitile}</h1>
                                                    <span className='m-3 text-gray-200'>{res.price}</span>
                                                </div>
                                                <div className='flex calender m-2 text-sm'>
                                                    <Image
                                                        className='invert'
                                                        src={res.calender.filename}
                                                        height={20}
                                                        width={20}
                                                        alt='logo'
                                                    />
                                                    <span className='mx-4'>{moment(res.date).format("MMM Do YYYY")}</span>
                                                    <Image
                                                        className='invert'
                                                        src={res.location.filename}
                                                        height={20}
                                                        width={20}
                                                        alt='logo'
                                                    />
                                                    <span className='mx-4'>{res.locationText}</span>
                                                </div>
                                                <div className='educator flex text-sm m-2'>
                                                    <Image
                                                        className='invert'
                                                        src={res.team.filename}
                                                        height={20}
                                                        width={20}
                                                        alt='logo'
                                                    />
                                                    <h4 className='mx-4'>Educator:</h4>
                                                    <span className='underline mx-4'>{res.educator1}</span>
                                                </div>
                                                <div className='subject flex m-2'>
                                                    <div>
                                                        <Image
                                                            className='invert'
                                                            src={res.subject.filename}
                                                            height={50}
                                                            width={50}
                                                            alt='logo'
                                                        />
                                                    </div>
                                                    <div className='mx-4'>
                                                        <span className={`w-10/12 ${style.psize}`}>{res.subDesc}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <button className='bg-pink-200 text-black px-4 py-2 font-semibold m-2'>JOIN THE COURSE</button>
                                                <button className='bg-black text-white border border-white px-4 py-2 font-semibold m-2'>JOIN THE COURSE</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
                }
                <div className='mt-11 mb-7 flex flex-col items-center'>
                    <Link href={'/'}>
                        <Image
                            src={data.content.icon.filename}
                            width={25}
                            height={25}
                            alt='icon'
                            className='bg-white rounded-full rotate-180 m-2'
                        />
                    </Link>
                    <span className='font-semibold tracking-widest '>BACK TO VBP ACADEMY MAIN PAGE</span>
                </div>
            </div >
            <div className='flex bg-white items-center justify-center '>
                <div className=' text-black justify-center flex flex-col items-center w-11/12  '>
                    <div className='flex flex-col justify-center items-center w-5/12'>
                        <h1 className={`${style.spacing2} font-bold tracking-widest m-4 `}>{data.content.title2}</h1>
                        <p className={`${style.font} font-semibold`}>{data.content.desc}</p>
                    </div>
                    <div className='flex m-5'>
                        <Image
                            className='invert'
                            src={data.content.icon2.filename}
                            height={20}
                            width={20}
                            alt='icon'
                        />
                        <span className='m-1 text-sm font-semibold'>{data.content.tag}</span>
                    </div>
                </div>
                <div className='text-black'>
                    <Carousal images={slides} icon={data.content.icon.filename} />
                </div>
            </div>
        </div>
    )
}

export default Educator

export async function getStaticPaths() {
    const client = new StoryblokClient({
        accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
    })

    const data = await client.getAll('cdn/stories', {
        version: 'published',
    })
    const paths = data.map((res) => ({
        params: {
            educatorId: res.slug,
        },
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const client = new StoryblokClient({
        accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
    })

    const { data } = await client.get(`cdn/stories/educator/${params.educatorId}`, {
        version: 'published',
    })

    return {
        props: {
            story: data.story,
        },
    }
}
