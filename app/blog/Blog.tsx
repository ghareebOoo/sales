import React from 'react'
import {blogs} from "../../public/src/assets/data"
import {Blogs} from "../../types"
import Image from 'next/image'
export default function Blog() {
  return (
    <div className='px-4 md:px-8 pt-40 pb-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {blogs.map((item:Blogs , index)=>{
          return <div key={index}>
            <div className='rounded-md bg-tertiary p-2.5'>
              <Image src={item.image} alt='image' width={300} height={150} className='rounded-md w-full'/>
            </div>
            <div className='mt-5'>
              <h2 className='text-base text-gray-50 font-semibold'>{item.category}</h2>
              <h3 className='text-base lg:text-lg xl:text-xl font-bold mt-1'>{item.title}</h3>
              <p className='mt-2 text-[14px] text-gray-50 font-medium line-clamp-2'>{item.description}</p>
              <button className='mt-5 underline text-base text-gray-50 font-medium'>Continue Reading</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
