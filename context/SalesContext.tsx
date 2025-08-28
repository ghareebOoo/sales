"use client"
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {dummyProperties}  from "../public/src/assets/data"
import {DummyProperties}  from "../types"
import { StaticImageData } from 'next/image'

type Reserv = {
    id?: string | undefined;
    checkIn? : string;
    checkOut?: string;
    quantity?: number;
    title?: string | undefined;
    address?: string | undefined;
    total?: number | undefined;
    img?: (string | StaticImageData )[] | undefined;
}

type props = {
    myData: DummyProperties[];
    setMyData: React.Dispatch<React.SetStateAction<DummyProperties[]>>
    reservations: Reserv[];
    setReservations: React.Dispatch<React.SetStateAction<Reserv[]>>
    addToReserve: (id:string | undefined , checkIn:string , checkOut:string , quantity:number , title: string | undefined , address: string | undefined , total: number | undefined , img: (string | StaticImageData )[] | undefined)=> void;
    deleteReserve: (index:number)=> void;
    updateReserve : (index: number , updateditem:Reserv)=> void;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export const salesContext = createContext<props | undefined>(undefined)

export default function SalesContextProvider({children}:{children: React.ReactNode}) {

    const [myData , setMyData] = useState<DummyProperties[] | []>([])
    const [reservations , setReservations] = useState<Reserv[] | []>([])
    const [token , setToken] = useState(localStorage.getItem("token"))

    const fetchedData = useCallback(()=>{
        setMyData(dummyProperties)
    },[])

    useEffect(()=>{
        fetchedData()
    },[fetchedData])

    const addToReserve = (id:string | undefined, checkIn:string , checkOut:string , quantity: number , title: string | undefined , address: string | undefined, total: number | undefined , img: (string | StaticImageData )[] | undefined)=>{

        const myReverse = {
            id: id,
            checkIn: checkIn,
            checkOut: checkOut,
            quantity: quantity,
            title: title,
            address: address, 
            total: total,
            img: img

        }

        setReservations((prev) => [...prev, myReverse])
    }

    const deleteReserve = (index:number)=>{
        const updated = [...reservations];
        updated.splice(index , 1)
        setReservations(updated)
    }

   const updateReserve = (index: number, updatedItem: Partial<Reserv>) => {
    setReservations((prev) => prev.map((item, i) => (i === index ? { ...item, ...updatedItem } : item)));
  };


    useEffect(()=>{
        const savedItems = localStorage.getItem("reservation")

        if(savedItems){
            const parsedItems = JSON.parse(savedItems) as Reserv[]

            setReservations(parsedItems)
        }


    } , [])


    useEffect(()=>{
        localStorage.setItem("reservation" , JSON.stringify(reservations))
    },[reservations])


    console.log(reservations)
  return (
    <salesContext.Provider value={{myData , setMyData , reservations , setReservations , addToReserve , deleteReserve , updateReserve , token , setToken}}>
        {children}
    </salesContext.Provider>
  )
}


export const useDepartment = ()=>{
    const context = useContext(salesContext)

    if(!context){
        throw new Error("Can not find your sales context")
    }

    return context
}
