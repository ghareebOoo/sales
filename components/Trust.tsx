import React from 'react'
import calendarSecondary from '../public/src/assets/calendar-secondary.svg'
import graph from '../public/src/assets/graph.svg'
import map from '../public/src/assets/map.svg'
import pound from '../public/src/assets/pound.svg'
import clientOne from "../public/src/assets/client1.jpg"
import clientTwo from "../public/src/assets/client2.jpg"
import clientThree from "../public/src/assets/client3.jpg"
import clientFour from "../public/src/assets/client4.jpg"
import star from "../public/src/assets/star.svg"
import about from "../public/src/assets/about.png"
import Image from 'next/image'
export default function Trust() {
  return (
    <div className='px-4 md:px-8 py-16'>
        <div className='w-full flex flex-col lg:flex-row gap-8 items-start lg:items-stretch'>

            <div className='w-full lg:max-w-[50%] flex flex-col justify-between'>
                <h2 className='text-secondary text-xl md:text-2xl font-semibold'>Your Trusted Real Estate Partner</h2>

                <h3 className='mt-2 text-2xl md:text-4xl font-bold'>Helping You Every Step of the Way</h3>

                <p className='mt-5 font-normal text-[14px] text-gray-50'>Trust, clarity, and simplicity are at the core of everything we do to make your property journey easy.</p>

                <div className='my-8 flex flex-col gap-3'>

                    <div className='flex items-center gap-2'>
                        <Image src={calendarSecondary} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                        <p className='font-normal text-[14px] text-gray-50'>In-app scheduling for property viewings</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image src={graph} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                        <p className='font-normal text-[14px] text-gray-50'>Real-time market price updates</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image src={map} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                        <p className='font-normal text-[14px] text-gray-50'>User-friendly interface for smooth navigation</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image src={pound} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                        <p className='font-normal text-[14px] text-gray-50'>Access to off-market properties</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>

                    <div className='flex items-center'>
                        <Image src={clientOne} alt='image-clientOne' width={50} height={50} className='rounded-full w-14 h-14'/>
                        <Image src={clientTwo} alt='image-clientTwo' width={50} height={50} className='rounded-full w-14 h-14 -ml-2.5'/>
                        <Image src={clientThree} alt='image-clientThree' width={50} height={50} className='rounded-full w-14 h-14 -ml-2.5'/>
                        <Image src={clientFour} alt='image-clientFour' width={50} height={50} className='rounded-full w-14 h-14 -ml-2.5'/>
                    </div>

                    <div className='md:border-l-[1px] md:border-gray-50 md:pl-4'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                <Image src={star} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                                <Image src={star} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                                <Image src={star} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                                <Image src={star} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                                <Image src={star} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                            </div>
                            <span className='text-gray-50 font-semibold text-base'>5.0</span>
                        </div>
                        <p className='text-gray-50 font-medium text-[14px]'>Trusted by <span className='text-black'>100,000+</span> users</p>
                    </div>

                </div>
            </div>

            <div className='w-full lg:max-w-[50%] flex flex-grow'>
                <Image src={about} alt='image-clientFour' width={500} height={500} className='w-full'/>
            </div>

        </div>
    
    </div>
  )
}
