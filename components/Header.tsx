"use client"
import React, { useEffect, useMemo, useState } from 'react'
import logo from "../public/src/assets/logo.png"
import search from '../public/src/assets/search.svg'
import user from '../public/src/assets/user.svg'
import menu from '../public/src/assets/menu.svg'
import close from '../public/src/assets/close.svg'
import userCircle from "../public/src/assets/user-circle-svgrepo-com.svg"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Home from './Home'
import { useDepartment } from '@/context/SalesContext'


export default function Header() {
    const links = useMemo(()=>(
    [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Listing",
            href: "/listing"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Contact",
            href: "/contact"
        },
        {
            label: "Reservations",
            href: "/reservations"
        },
    ]
),[])

const pathName = usePathname()

const [showInput , setShowInput] = useState(false)

const [showNav , setShowNav] = useState(false)

const [showShadow , setShowShadow] = useState(false)

const {token , setToken} = useDepartment()

useEffect(()=>{
   
    const toggleShadow = ()=>{
        if(window.scrollY > 50){
            setShowShadow(true)
        }else{
            setShowShadow(false)
        }
    }

    window.addEventListener("scroll" , toggleShadow)

    return ()=>{
        window.removeEventListener("scroll" , toggleShadow)
    }
},[])

  return (
    <>
    {pathName === "/" &&    <Home />}

    {pathName !== "/login" &&       <div className={`${pathName === "/" ? showShadow ? "bg-white shadow-xl" : "" : "bg-white shadow-xl"} fixed top-0 z-50 w-full px-4 md:px-8 py-4`}>

        <div className='flex items-center justify-between gap-2'>

            <div>
                <Image src={logo} alt='logo-image' width={100} height={100} />
            </div>

            {/* DESKTOP */}
            <div className={`${pathName === "/" ? showShadow ? "text-balck" : " text-white" : ""} hidden lg:flex items-center gap-4`}>
                {links.map((item , index)=>{
                    return <Link href={item.href} key={index} className={`${pathName === item.href ? "before:absolute before:w-full before:h-1 before:bg-secondary before:-bottom-1" : ""} relative w-fit text-base font-bold`}>{item.label}</Link>
                })}
            </div>

            {/* MOBILE */}

            <div className={`${showNav ? "h-[300px]" : "h-0"} overflow-hidden transition-all duration-700 block lg:hidden w-[250px] bg-white shadow-md right-5 top-[90px] fixed z-50 rounded-md`}>
                <div className='pl-5 py-4 flex flex-col justify-between h-full items-start gap-4'>
                    {links.map((item , index)=>{
                        return <Link onClick={()=> setShowNav(false)} href={item.href} key={index} className={`${pathName === item.href ? "before:absolute before:w-full before:h-1 before:bg-secondary before:-bottom-1" : ""} relative w-fit text-base font-bold`}>{item.label}</Link>
                    })}
                </div>
            </div>

            <div className='flex items-center gap-4'>

                <div className={`${pathName === "/" ? "bg-primary" : "bg-tertiary"} ${showInput ? "w-[250px]" : "w-0"} hidden lg:block transition-all duration-700 h-[50px]  rounded-full relative`}>
                    <input className={` ${showInput ? "border-[1px]" : "border-[0px]"}  pl-2 h-full w-full  rounded-full border-gray-50 placeholder:text-gray-50`} placeholder='Type Here...'/>
                    <div onClick={()=> setShowInput(!showInput)} className='cursor-pointer w-[50px] h-[50px] rounded-full bg-secondary/70 flex items-center justify-center absolute right-0 top-0 border-[1px] border-gray-50'>
                        <Image src={search} alt='seacrh-icon' width={30} height={30} className='w-[30px]'/>
                    </div>
                </div>

                <div onClick={()=> setShowNav(!showNav)} className='block lg:hidden cursor-pointer'>
                    {showNav ? <Image src={close} alt='user-icon' width={30} height={30} className='w-[30px]'/> : <Image src={menu} alt='user-icon' width={30} height={30} className='text-[30px]'/>}
                    
                </div>

                {token ? <div onClick={() => { setToken(null); localStorage.removeItem("token");}} className="cursor-pointer flex items-center justify-center gap-2 px-4 h-[50px] rounded-full bg-primary-dull transition-all duration-500 hover:bg-secondary">
                    <span className="text-base font-mediu">Log out</span>
                    <Image src={userCircle} alt='user-icon' width={30} height={30} className='w-[30px]'/></div>  : <Link href={"/login"} className='cursor-pointer flex items-center justify-center gap-2 px-4 h-[50px] rounded-full bg-secondary transition-all duration-500 hover:bg-primary-dull'>
                    <span className='text-base font-medium'>Login</span>
                    <Image src={user} alt='user-icon' width={30} height={30} className='w-[30px]'/>
                </Link>}

           

            </div>

        </div>

    </div>}




    </>
  )
}
