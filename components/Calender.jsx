import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Image from 'next/image'
import svg from '../public/Icon_Profile.svg'
import interactionPlugin from '@fullcalendar/interaction';
import location from '../public/Icon_Location.svg'
import style from '../styles/calender.module.css'
import StoryblokClient from 'storyblok-js-client'
import CanederIcon from '../public/Icon_Calendar.svg'
import subject from '../public/Icon_Subject.svg'
import moment from 'moment/moment'
const Calender = () => {
    const [events, setEvents] = useState([]);
    const [upcomigEvent, setUpcomigEvent] = useState()
    const [selectedOption, setSelectedOption] = useState('option2');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
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

    useEffect(() => {
        const fetch = async () => {
            const client = new StoryblokClient({
                accessToken: 'QkZRIJv3MRuojAxz4rMUBwtt',
            })

            const data = await client.get('cdn/stories', {
                version: 'published',
                starts_with: 'events/',
            })

            const value = data.data.stories
            const formattedData = value.map(event => ({
                title: event.content.educator,
                start: event.content.date,
                allDay: true
            }));
            setEvents(formattedData);

            // upcomg event
            const now = new Date();
            const newDates = data.data.stories.filter(res => new Date(res.content.date) > now)
            const newsortedEvents = newDates.sort((a, b) => new Date(a.content.date) - new Date(b.content.date));
            const newEvent = newsortedEvents[0];
            setUpcomigEvent(newEvent)
        }
        fetch()
    }, [])
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
                        <select className='text-black border border-black px-2' value={selectedOption} onChange={handleSelectChange}>
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
                        <select className='text-black border border-black px-2' value={selectedOption} onChange={handleSelectChange}>
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
                    events={events}
                    dayCellDidMount={(info) => {
                        const cell = info.el;
                        cell.style.borderColor = "white";
                        cell.style.backgroundColor = "#F5F5F5";
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
                <div className='flex flex-col justify-center items-center mb-20'>
                    <div className='m-10'>
                        <h1 className='font-bold text-2xl tracking-widest'>THE NEXT VBP ACADEMY COURSE</h1>
                    </div>
                    <div className='flex '>
                        <div>
                            <div className='flex '>
                                <div className='flex text-sm mr-4'>
                                    <Image
                                        src={CanederIcon}
                                        height={20}
                                        width={20}
                                        alt=''
                                        className='m-2'
                                    />
                                    <span className='my-2'>{upcomigEvent !== undefined ? moment(upcomigEvent.content.date).format("MMM Do YYYY") : ''}</span>
                                </div>
                                <div className='flex text-sm'>
                                    <Image
                                        src={location}
                                        height={20}
                                        width={20}
                                        alt=''
                                        className='m-2'
                                    />
                                    <span className='my-2'>{upcomigEvent !== undefined ? upcomigEvent.content.locationText : ''}</span>
                                </div>
                            </div>
                            <div className='flex text-sm'>
                                <Image
                                    src={svg}
                                    height={20}
                                    width={20}
                                    alt=''
                                    className='m-2'
                                />
                                <span className='my-2 '>Educator: </span>
                                <span className='my-2 ml-3 underline'>{upcomigEvent !== undefined ? upcomigEvent.content.educator : ''}</span>
                            </div>
                            <div className='flex text-sm'>
                                <Image
                                    src={subject}
                                    height={20}
                                    width={20}
                                    alt=''
                                    className='m-2'
                                />
                                <p className='my-2'>{upcomigEvent !== undefined ? upcomigEvent.content.subjectDesc : ''}</p>
                            </div>
                        </div>
                        <div className='flex flex-col ml-10'>
                            <button className={`${style.btnbgColor} p-2 font-bold tracking-widest w-64 m-2`}>JOIN THIS COURSE</button>
                            <button className=' p-2 font-bold tracking-widest border-black border w-64 m-2'>MORE INFO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender

