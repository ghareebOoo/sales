"use client"
import React from 'react'
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import bed from "../public/src/assets/bed.svg"
import bath from "../public/src/assets/bath.svg"
import car from "../public/src/assets/car.svg"
import ruler from "../public/src/assets/ruler.svg"

import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { useDepartment } from '@/context/SalesContext';
export default function Discover() {

    const {myData} = useDepartment()
  return (
    <div className='px-4 md:px-8 py-16'>
        <h2 className='text-xl md:text-2xl font-normal'>Your New Home Awaits!</h2>

        <h3 className='mt-2 text-2xl md:text-4xl font-bold'>Discover Your Place Here</h3>

        <div className='mt-8 flex items-center text-xl font-medium'>Displaying 1–9 <span className='font-normal'>from 3k listings</span></div>

        <div className='mt-5'>
            <Swiper modules={[Autoplay]}
                autoplay={{disableOnInteraction: false , delay: 3000}}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{320:{slidesPerView: 1} , 640: {slidesPerView: 2} , 1024:{slidesPerView: 3} , 1220:{slidesPerView: 4}}}
            >

               {myData.map((item , index)=>{
                return <SwiperSlide key={index}>
                    <Link href={`/listing/${item._id}`} className=''>
                        <div>
                            <Image src={item.images[0]} alt='image' width={300} height={220} className='object-cover w-full h-[220px] rounded-t-md'/>
                        </div>
                        <div className='border-[1px] border-gray-50 rounded-b-md px-2.5 pt-2.5 pb-5'>
                            <div className='w-full mt-5 flex items-center justify-between'>
                                <span className='font-bold text-base'>{item.propertyType}</span>
                                <div className='text-base text-secondary font-medium'>{item.title === "Oceanview Oasis Serenity Escape" ? <div className='text-base font-semibold'>$9999 | $199.00/night</div> : item.title === "Mountain Majesty Tranquility Haven" ? <div className='text-base font-semibold'>$22000 | $199.00/night</div> : item.title === "Urban Elegance Sophistication Haven" ? <div className='text-base font-semibold'>$77000 | $399.00/night</div> : item.title === "Garden Grove Oasis Retreat Haven" ? <div className='text-base font-semibold'>$22000 | $199.00/night</div> : item.title === "Seaside Bliss Modern Retreat" ? <div className='text-base font-semibold'>$44000 | $299.00/night</div> : item.title === "Countryside Charm Rustic Escape" ? <div className='text-base font-semibold'>$12000 | $199.00/night</div> : ""}</div>
                            </div>
                            <h4 className='mt-2 text-lg line-clamp-1 font-semibold'>{item.title}</h4>
                            <div className='mt-3 w-full flex items-center gap-2'>

                                <div className='w-full flex items-center gap-2 text-gray-50 font-medium border-r-[1px] border-gray-50 pr-2'><Image src={bed} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{item.facilities.bedrooms}</div>
                                <div className='w-full flex items-center gap-2 text-gray-50 font-medium border-r-[1px] border-gray-50 pr-2'><Image src={bath} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{item.facilities.bathrooms}</div>
                                <div className='w-full flex items-center gap-2 text-gray-50 font-medium border-r-[1px] border-gray-50 pr-2'><Image src={car} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{item.facilities.garages}</div>
                                <div className='w-full flex items-center gap-2 text-gray-50 font-medium'><Image src={ruler} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{item.propertyType.toLowerCase() === "house" && item.price.sale === 33000  ? 200 : item.propertyType.toLowerCase() === "house" && item.price.sale === 44000  ? 250 :  item.propertyType.toLowerCase() === "apartment" && item.price.sale === 99000 ? 399 : item.propertyType.toLowerCase() === "apartment" && item.price.sale === 12000 ? 700 :  item.propertyType.toLowerCase() === "villa" ? 299 : item.propertyType.toLowerCase() === "townhouse" ? 200 : ""}</div>

                            </div>
                            <p className='mt-3 text-base font-normal text-gray-50 line-clamp-2'>{item.description}</p>
                        </div>
                    </Link>
                </SwiperSlide>
               })} 
      
      
            </Swiper>
        </div>
    </div>
  )
}
