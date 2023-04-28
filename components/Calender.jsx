import React, { useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Image from 'next/image'
import svg from '../public/Icon_Profile.svg'
import interactionPlugin from '@fullcalendar/interaction';
import location from '../public/Icon_Location.svg'
import style from '../styles/calender.module.css'
const Calender = () => {

    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    const eventContent = (eventInfo) => {
        return (
            <div className='bg-black flex text-white rounded-e-full items-center'>
                <Image
                    src={svg}
                    height={20}
                    width={20}
                    alt='logo'
                    className='invert'
                />
                {eventInfo.timeText} {eventInfo.event.title}
            </div>
        );
    };

    return (
        <div className='bg-white text-black' >
            <div className='flex flex-col items-center mb-14 pt-5'>
                <h1 className={`font-bold text-xl m-10 ${style.spacing}`}>ALL COURSES</h1>
                <div className='flex'>
                    <div className='flex mx-3'>
                        <Image
                            src={location}
                            height={30}
                            width={30}
                            alt='icon'
                            className={`m-2 ${style.filter}`}
                        />
                        <select className='text-black border border-black px-2' >
                            <option value="" disabled selected>
                                Filter by Location
                            </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div className='flex mx-3'>
                        <Image
                            src={svg}
                            height={30}
                            width={30}
                            alt='icon'
                            className={`m-2 ${style.filter}`}
                        />
                        <select className='text-black border border-black px-2'>
                            <option value="" disabled selected>
                                Filter by Educator
                            </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className=' text-black flex flex-col justify-center items-center'>
                <FullCalendar
                    dayCellContent={(arg) => (
                        <div className='w-12/12'>
                            <span className={`align-text-bottom font-semibold`} >{arg.dayNumberText}</span>
                        </div>
                    )}
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    backgroundColor="red"
                    themeSystem='bootstrap5'
                    events={[
                        { title: '@chellys_nails', date: '2023-03-11' },
                        { title: '@chellys_nails', date: '2023-03-12' },
                        { title: '@sabrina_ils', date: '2023-03-25' },
                        { title: '@sabrina_ils', date: '2023-03-26' },
                        { title: '@dazzlenlearn', date: '2023-03-27' },
                    ]}
                    dayCellDidMount={(info) => { // add dayCellDidMount callback function
                        const cell = info.el;
                        cell.style.borderColor = "white";
                        cell.style.backgroundColor = "#F5F5F5"; // set border color here
                        // cell.style.backgroundColor = "red"; // set border color here
                        cell.style.borderWidth = "5px"
                        cell.style.height = '50px'
                    }}
                    eventContent={eventContent}
                    headerToolbar={{
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    }}

                />
            </div>
        </div>
    )
}

export default Calender

