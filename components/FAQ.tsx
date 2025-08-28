"use client"
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import faq from "../public/src/assets/faq.png"
import down from "../public/src/assets/down.svg"
import signature from "../public/src/assets/signature.svg"
import {motion , AnimatePresence} from "framer-motion"
export default function FAQ() {

    const faqData = useMemo(()=>(
        [
            {
                ques: "Lightning-Fast Booking",
                ans: "Designed for speed — instant search and seamless property viewing."
            },
            {
                ques: "Fully Customizable Homes",
                ans: "Easily change layouts, features, and designs to fit your lifestyle."
            },
            {
                ques: "Responsive by Location",
                ans: "Every property is accessible by area — no extra effort required."
            },
            {
                ques: "Real Estate Powered",
                ans: "Backed using trusted property data — no extra agents or steps needed."
            },
            {
                ques: "Smart Home Support",
                ans: "All houses come ready with modern smart living features included."
            },
        ]
    ),[])

    const [showAnswer , setShowAnswer] = useState<null | number>(null)
  return (
    <div className='px-4 md:px-8 py-16'>
        <div className='flex flex-col lg:flex-row items-start lg:items-stretch gap-8'>
            <div className='w-full'>
                <div className='relative z-10'>
                    <Image src={faq} alt='image' width={500} height={500}  className='rounded-md w-full'/>
                    <div className='bg-primary p-2 rounded-md absolute w-[90%] top-5 left-[50%] translate-x-[-50%]'>
                        <div className='flex items-center gap-4'>
                            <Image src={signature} alt='image' width={30} height={30}  className='w-[30px]'/>
                            <div>
                                <h2 className='text-xl font-semibold'>Trusted Real Estate Experts</h2>
                                <p className='text-[14px] md:text-base text-gray-50 font-normal'>Trust, clarity, and simplicity are at the core of everything we do to make your property journey easy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-between'>
                <h3 className='text-2xl font-bold text-secondary'>Homes Made for Living</h3>
                <h4 className='mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-[35px] md:leading-[50px]'>Simplifying Your Property Search Every Step</h4>
                <p className='mt-2 text-base text-gray-50 font-normal'>From finding the right location to finalizing the deal, we ensure your real estate journey is smooth, efficient, and fulfilling.</p>
                <div className='mt-2 flex flex-col gap-4'>
                    {faqData.map((item , index)=>{
                        return <div className='' key={index}>
                            <motion.div animate={{height: showAnswer === index ? "auto" : 48}} transition={{duration : 1}}>
                                <div className='p-2 bg-tertiary border-[1px] border-gray-50 rounded-md w-full flex items-center justify-between gap-2'>
                                    <h5 className='text-base font-normal'>{item.ques}</h5>
                                    <div onClick={()=> setShowAnswer(showAnswer === index ? null : index)} className={`${showAnswer === index ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-700`}>
                                        <Image src={down} alt='image' width={30} height={30}  className='w-[30px]'/>
                                    </div>
                                </div>
                                {showAnswer === index && <AnimatePresence><motion.p initial={{opacity : 0}} animate={{opacity: 1}} exit={{opacity : 0}} transition={{duration : 2.0}}  className="px-4 mt-2 text-[14px] md:text-base">{item.ans}</motion.p></AnimatePresence> }
                                
                            </motion.div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
