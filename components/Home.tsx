import React from 'react'
import right from '../public/src/assets/right.svg'
import pin from '../public/src/assets/pin.svg'
import Image from 'next/image'
import calendar from '../public/src/assets/calendar.svg'
import users from '../public/src/assets/users.svg'
import search from '../public/src/assets/search.svg'
export default function Home() {
  return (
    <div className='bg-home h-screen bg-cover relative'>
        <div className='absolute w-full bottom-10 px-4 md:px-8'>

            <div className='w-full max-w-[345px] px-2 py-1 hidden lg:flex items-center justify-center gap-2 border-[1px] border-white rounded-full'>
                <h2 className='text-[12px] md:text-[14px] text-primary font-normal'>Esplore how we simplify stays and spaces</h2>
                <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'>
                    <Image src={right} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                </div>
            </div>

            <p className='mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-bold'>Explore <span className="text-secondary">exceptional</span> properties located in stunning surroundings.</p>

            <div className='mt-5 w-full max-w-[350px] lg:max-w-full p-2.5 bg-white rounded-md'>
                <form className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>

                    <div className='w-full'>
                        <label className='text-gray-50 flex items-center gap-2'><Image src={pin} alt='user-icon' width={30} height={30} className='w-[30px]'/> Destination</label>
                        <input type='text' className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2' placeholder='Type Here'/>
                    </div>

                    <div className='w-full'>
                        <label className='text-gray-50 flex items-center gap-2'><Image src={calendar} alt='user-icon' width={30} height={30} className='w-[30px]'/> Check In</label>
                        <input type="date" className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2'/>
                    </div>

                    <div className='w-full'>
                        <label className='text-gray-50 flex items-center gap-2'><Image src={calendar} alt='user-icon' width={30} height={30} className='w-[30px]'/> Check Out</label>
                        <input type="date" className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2'/>
                    </div>

                    <div className='w-full'>
                        <label className='text-gray-50 flex items-center gap-2'><Image src={users} alt='user-icon' width={30} height={30} className='w-[30px]'/> Guests</label>
                        <input type="number" value={0} onChange={(e) => (e.target.value)} className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2'/>
                    </div>

                    <button  className='cursor-pointer w-fit flex items-center justify-center gap-2 bg-gray-50 rounded-md text-primary py-1 px-8'>
                        <Image src={search} alt='seacrh-icon' width={30} height={30} className='w-[30px]'/>
                        Search
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}
