"use client"
import { useDepartment } from '@/context/SalesContext'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import React, { useEffect, useMemo, useState } from 'react'
import bed from "../../public/src/assets/bed.svg"
import bath from "../../public/src/assets/bath.svg"
import car from "../../public/src/assets/car.svg"
import ruler from "../../public/src/assets/ruler.svg"
import close from "../../public/src/assets/close.svg"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"




export default function Listing() {

    const priceRange = useMemo(()=>(
    [
      {
        "price": [0, 10000],
      },
      {
        "price": [10000 , 20000],
      },
      {
        "price": [20000 , 40000],
      },
      {
        "price": [40000 , 80000],
      },
      {
        "price": [80000 , 100000],
      },
    ]
  ),[])

    const [showSideBar , setShowSideBar] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(()=>{
    const handelResize = ()=>{
      if(window.innerWidth >= 1280){
        setIsDesktop(true)
        setShowSideBar(true)
      }else{
        setIsDesktop(false)
        setShowSideBar(false)
      }
    }

    handelResize()

    window.addEventListener("resize" , handelResize)

    return  ()=>{
      window.removeEventListener("resize" , handelResize)
    }
  },[])
  const [chooseLevl , setChooseLevel] = useState("relevant")

  const handelLevel = (value:string)=>{
    setChooseLevel(value)
  }

  const {myData} = useDepartment()

  let filteredData = myData


  const propertiesType = useMemo(()=>([...new Set(myData.map((item)=> item.propertyType))]),[myData])

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<number[][]>([]);

  if(chooseLevl === "low"){
    filteredData = [...filteredData].sort((a, b) => a.price.sale - b.price.sale);
  }else if(chooseLevl === "high"){
    filteredData = [...filteredData].sort((a, b) => b.price.sale - a.price.sale);
  }

  if(selectedTypes.length > 0){
    filteredData = filteredData.filter((item)=> selectedTypes.includes(item.propertyType))
  }

  if(selectedPrices.length > 0){
    filteredData = filteredData.filter((item)=> selectedPrices.some(([min , max])=> item.price.sale >= min && item.price.sale <= max))
  }

  const handelProperty = (prop: string)=>{
    setSelectedTypes((prev)=> prev.includes(prop) ? prev.filter((p)=> p !== prop)  : [...prev , prop])
  }

  const handelPrice = (range: number[])=>{
    setSelectedPrices((prev)=> prev.some((p)=> p[0] === range[0] && p[1] === range[1]) ? prev.filter((p)=> !(p[0] === range[0] && p[1] === range[1])) : [...prev , range])
  }
  



 
  return (
    <div className='px-4 md:px-8 pt-40 pb-10'>
      <button onClick={()=>setShowSideBar(true)} className='xl:hidden cursor-pointer mb-5 text-2xl font-bold text-secondary'>choose type or price</button>
      <div className='flex gap-8'>
        {showSideBar &&    <motion.div initial={{ y: isDesktop ? 0 : "-130%"  }} animate={{ y: 0, transition: { duration: 0.7, ease: "easeOut" } }} className={` xl:block xl:translate-y-0 absolute top-[120px] xl:static left-[50%] translate-x-[-50%] xl:translate-x-0 w-full xl:w-[300px] h-auto xl:h-[700px] bg-amber-100 rounded-md p-2`}>
          <div onClick={()=>setShowSideBar(false)} className='xl:hidden cursor-pointer absolute right-5 top-5'>
            <Image  src={close} alt='icon' width={30} height={30} className='text-[30px]' />
          </div>
          <h2 className='mt-10 text-xl font-bold'>Sort By</h2>

          <Select value={chooseLevl} onValueChange={handelLevel}>
            <SelectTrigger className="w-full mt-5">
              <SelectValue placeholder="Relevant" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="relevant">Relevant</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <h3 className='mt-10 text-xl font-bold'>Property Type</h3>
          <div className='mt-5 flex flex-col gap-3'>
            {propertiesType.map((pro , index)=>{
              return <div key={index} className='flex items-center gap-2'>
                <input type='checkbox' checked={selectedTypes.includes(pro)} onChange={()=> handelProperty(pro)}/>
                {pro}
              </div>
            })}
          </div>
          <h4 className='mt-10 text-xl font-bold'>Price Range</h4>
          <div className='mt-5 flex flex-col gap-3'>
            {priceRange.map((item , index)=>{
              const isChecked = selectedPrices.some((p)=>p[0] === item.price[0] && p[1] === item.price[1])
              return <div key={index} className='flex items-center gap-2'>
                <input type='checkbox' checked={isChecked} onChange={()=> handelPrice(item.price)}/>
                ${item.price[0]} to {item.price[1]}
              </div>
            })}
          </div>
        </motion.div>}
  
        <div className='w-full xl:max-w-[80%] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredData.map((item , index)=>{
                  return  <Link key={index} href={`/listing/${item._id}`} className=''>
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
               })} 
        </div>
      </div>
    </div>
  )
}
