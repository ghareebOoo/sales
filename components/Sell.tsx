import Image from 'next/image'
import React from 'react'
import rocket from "../public/src/assets/rocket.svg"

export default function Sell() {
  return (
    <div className='bg-[#fffbee] px-4 md:px-8 py-16'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className='bg-tertiary flex items-center justify-center gap-2 px-4 py-2 rounded-full'>
                <Image src={rocket} alt='image' width={30} height={30} className='w-[30px]' /> 
                <span className='font-normal text-[14px]'>Trusted by Experts</span>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:max-w-[720px] leading-[40px] md:leading-[50px] lg:leading-[60px]'>Sell or Rent Faster with <span className='text-secondary'>Expert Strategies</span> and Real Support!</h2>
            <p className='text-[14px] md:text-base text-gray-50 font-normal text-center lg:max-w-[560px]'>Achieve your goals faster with personalized strategies, hands-on support, and results that speak for themselves.</p>
            <button className='cursor-pointer px-4 py-2 rounded-full bg-secondary text-base font-normal'>Get Started</button>
        </div>
    </div>
  )
}
