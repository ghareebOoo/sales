"use client"
import { useDepartment } from '@/context/SalesContext'
import Image from 'next/image'
import React, { useState } from 'react'
import pin from '../../public/src/assets/pin.svg'
import close from '../../public/src/assets/close.svg'
import update from '../../public/src/assets/update-alt-svgrepo-com.svg'


export default function Reservations() {
    const { reservations , deleteReserve , updateReserve } = useDepartment()

    const [showWarning , setShowWarning] = useState<number | null>(null)

    

  return (
    <div className='px-4 md:px-8 pt-40 pb-10'>
        <div className='grid grid-cols-1 gap-8'>
            {reservations.map((item , index)=>{
                return <div key={index} className='bg-white shadow-md rounded-md pt-4 relative'>

                    {showWarning === index && (<div className='absolute w-fit top-0 right-0 bg-primary h-[100px] rounded-md p-2.5'>
                        <div className='text-base font-semibold'>
                            Are you sure you want to cancel this reservation ?
                        </div>
                        <div className='absolute bottom-2 w-[95%] flex items-center justify-between'>
                            <button onClick={()=>{setShowWarning(null);  deleteReserve(index) }} className='cursor-pointer text-base transition-all duration-300 hover:text-red-500'>Yes</button>
                            <button onClick={()=> setShowWarning(null)} className='cursor-pointer text-base transition-all duration-300 hover:text-green-500'>No</button>
                        </div>
                    </div>) }

                

                <div  className='p-2.5 flex flex-col md:flex-row items-stretch gap-4 '>

                    <div className='flex'>
                        {item.img && item.img.length > 0 && (
                            <Image src={item.img[0]} alt='image' width={200} height={150} className='rounded-md object-cover h-[250px] md:h-[150px] w-full md:w-auto' />
                        )}
                    </div>

                    <div className='flex flex-col justify-between gap-2 w-full'>
                        <h2 className='md:text-base lg:text-xl xl:text-2xl font-semibold'>{item.title}</h2>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-1 text-[14px]'>Guests: <input className='text-gray-50 font-semibold' type='number' value={item.quantity}  onChange={(e) => updateReserve(index, { quantity: parseInt(e.target.value) })}/></div>
                            <div className='flex items-center gap-1 text-[14px]'>Total: <span className='text-gray-50 font-semibold'>{item.total}</span></div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Image src={pin} alt='icon' width={30} height={30}  />
                            <p className='text-gray-50 font-normal text-[14px]'>{item.address}</p>
                        </div>
                    </div>

                </div>

                <div className='p-2.5 mt-5 w-full flex items-center flex-wrap gap-4 border-y-[1px] border-gray-50 py-4'>
                    <div>Booking</div>
                    <span className='text-base font-semibold'>ID: <span className='text-gray-50 text-base font-normal'>{item.id}</span></span>
                    <span className='text-base font-semibold'>CheckIn: <input className='text-gray-50 font-normal' type='date' value={item.checkIn}  onChange={(e) => updateReserve(index, { checkIn: (e.target.value) })}/></span>
                    <span className='text-base font-semibold'>CheckOut: <input className='text-gray-50 font-normal' type='date' value={item.checkOut}  onChange={(e) => updateReserve(index, { checkOut: (e.target.value) })}/></span>
                </div>

                <div className='p-2.5 mt-5 flex items-center gap-4'>

                    <div onClick={()=> setShowWarning(index)} className='cursor-pointer'>
                        <Image src={close} alt='icon-close' width={40} height={40} className='w-[40px]' />
                    </div>

                    <div className='cursor-pointer'>
                        <Image src={update} alt='icon-close' width={40} height={40} className='w-[40px]' />
                    </div>

                </div>

                </div> 

            })}
        </div>
    </div>
  )
}
