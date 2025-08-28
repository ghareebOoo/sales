"use client"
import React, { useMemo } from 'react'
import userOne from "../public/src/assets/user1.png"
import userTwo from "../public/src/assets/user2.png"
import userThree from "../public/src/assets/user3.png"
import userFour from "../public/src/assets/user4.png"
import badge from "../public/src/assets/badge.svg"
import Image from 'next/image'
export default function Users() {

    const ourUsers = useMemo(()=>(
        [
            {
                name:"Avery Johnson",
                img: userOne,
                a : "@averywrites",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"May 10, 2025"
            },
            {
                name:"Jordan Lee",
                img: userTwo,
                a : "@jordantalks",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"June 5, 2025"
            },
            {
                name:"John Doe",
                img: userThree,
                a : "@jordantalks",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"June 5, 2025"
            },
            {
                name:"Briar Martin",
                img: userFour,
                a : "@neilstellar",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"April 20, 2025"
            },
            {
                name:"Avery Johnson",
                img: userOne,
                a : "@averywrites",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"May 10, 2025"
            },
            {
                name:"Jordan Lee",
                img: userTwo,
                a : "@jordantalks",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"June 5, 2025"
            },
            {
                name:"John Doe",
                img: userThree,
                a : "@jordantalks",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"June 5, 2025"
            },
            {
                name:"Briar Martin",
                img: userFour,
                a : "@neilstellar",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"April 20, 2025"
            },
            {
                name:"Avery Johnson",
                img: userOne,
                a : "@averywrites",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"May 10, 2025"
            },
            {
                name:"Jordan Lee",
                img: userTwo,
                a : "@jordantalks",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"June 5, 2025"
            },
            {
                name:"John Doe",
                img: userThree,
                a : "@jordantalks",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"June 5, 2025"
            },
            {
                name:"Briar Martin",
                img: userFour,
                a : "@neilstellar",
                desc:"adiant made undercutting all of our competitors an absolute breeze.",
                date:"April 20, 2025"
            },
        ]
    ),[])
  return (
    <div className='overflow-hidden px-4 md:px-8 py-16'>

        <div className='flex w-full gap-4 firstUsers'>
            {ourUsers.map((item , index)=>{
                return <div key={index} className='w-max shrink-0 shadow-md rounded-md p-2.5 bg-white transition-all duration-700 hover:shadow-xl'>
                    <div className='flex items-center gap-2'>
                        <Image src={item.img} alt='image' width={40} height={40} className='w-10 h-10 rounded-full' />
                        <div>
                            <h2 className='flex items-center gap-1 text-gray-50 font-medium text-[14px]'>{item.name} <Image src={badge} alt='image' width={20} height={20} className='w-5' /></h2>
                            <span className='text-gray-50 font-medium text-[14px]'>{item.a}</span>
                        </div>
                    </div>
                    <p className='my-5 max-w-[270px] text-base font-normal text-gray-50'>{item.desc}</p>
                    <div className='w-full flex items-center justify-between gap-2'>
                        <h3 className='flex items-center gap-1'>
                            Posted on
                            <a href="https://x.com" target="_blank" className="hover:text-sky-500"><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor"></path></svg></a>
                        </h3>
                        <span className='text-[14px] font-normal text-gray-50'>{item.date}</span>
                    </div>
                </div>
            })}
        </div>

        <div className='mt-10 flex w-full gap-4 secondUsers'>
            {ourUsers.map((item , index)=>{
                return <div key={index} className='w-max shrink-0 shadow-md rounded-md p-2.5 bg-white transition-all duration-700 hover:shadow-xl'>
                    <div className='flex items-center gap-2'>
                        <Image src={item.img} alt='image' width={40} height={40} className='w-10 h-10 rounded-full' />
                        <div>
                            <h2 className='flex items-center gap-1 text-gray-50 font-medium text-[14px]'>{item.name} <Image src={badge} alt='image' width={20} height={20} className='w-5' /></h2>
                            <span className='text-gray-50 font-medium text-[14px]'>{item.a}</span>
                        </div>
                    </div>
                    <p className='my-5 max-w-[270px] text-base font-normal text-gray-50'>{item.desc}</p>
                    <div className='w-full flex items-center justify-between gap-2'>
                        <h3 className='flex items-center gap-1'>
                            Posted on
                            <a href="https://x.com" target="_blank" className="hover:text-sky-500"><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor"></path></svg></a>
                        </h3>
                        <span className='text-[14px] font-normal text-gray-50'>{item.date}</span>
                    </div>
                </div>
            })}
        </div>

    </div>
  )
}
