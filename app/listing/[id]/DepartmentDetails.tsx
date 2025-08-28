"use client"
import { useDepartment } from '@/context/SalesContext'
import Image from 'next/image'
import pin from '../../../public/src/assets/pin.svg'
import star from '../../../public/src/assets/star.svg'
import bed from "../../../public/src/assets/bed.svg"
import bath from "../../../public/src/assets/bath.svg"
import car from "../../../public/src/assets/car.svg"
import ruler from "../../../public/src/assets/ruler.svg"
import calendar from "../../../public/src/assets/calendar.svg"
import search from "../../../public/src/assets/search.svg"
import users from "../../../public/src/assets/users.svg"
import user from "../../../public/src/assets/user.png"
import phone from "../../../public/src/assets/phone.svg"
import mail from "../../../public/src/assets/mail.svg"
import { useState } from 'react'
import toast from 'react-hot-toast';

export default function DepartmentDetails({id}:{id: string}) {

 
  const {myData , addToReserve} = useDepartment()
  const myDepartment = myData.find((item)=> item._id === id)

  const [checkIn , setCheckIn] = useState("")
  const [checkOut , setCheckOut] = useState("")
  const [quantity , setQuantity] = useState(1)


  const handelReserve = ()=>{
    if(checkIn === "" || checkOut === ""){
      toast.error("Check-in and check-out dates are required.")
    }else{
      addToReserve(myDepartment?._id , checkIn , checkOut , quantity , myDepartment?.title , myDepartment?.address , myDepartment?.price.rent , myDepartment?.images)
      toast.success("Booking completed successfully.")
    }
  }

  return (
    <div className='px-4 md:px-8 pt-40 pb-10'>
 
      <div className='flex items-center gap-4 group'>
        {myDepartment?.images.map((item , index)=> {
          if(index === 0){
            return (
              <div key={index} className={`w-full transition-all duration-700 group-has-[.thumb:hover]:w-[50px] sm:group-has-[.thumb:hover]:w-[100px] md:group-has-[.thumb:hover]:w-[150px] lg:group-has-[.thumb:hover]:w-[200px]`}>
                <Image src={item} alt='image' width={500} height={500} className='w-full h-[350px] object-cover rounded-md' />
              </div>
            )
          }
          
          return (
            <div key={index} className={`thumb hover:w-full w-[50px] sm:w-[100px] md:w-[150px] lg:w-[200px] transition-all duration-700`}>
              <Image src={item} alt='image' width={500} height={500} className='w-full h-[350px] object-cover rounded-md' />
            </div>
          )
        })}
      </div>
      <div className='mt-5 flex flex-col xl:flex-row gap-4'>

        <div className='w-full xl:max-w-[70%] p-2.5 rounded-md border-[1px] border-gray-50'>

          <div className='flex items-center gap-2'>
            <Image src={pin} alt='user-icon' width={25} height={25} className='w-[25px]'/>
            <span className='text-[14px] md:text-base font-normal text-gray-50'>{myDepartment?.address}</span>
          </div>

          <div className='mt-5 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-2'>
            <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>{myDepartment?.title}</h2>
            <div className='whitespace-nowrap'>{myDepartment?.title === "Oceanview Oasis Serenity Escape" ? <div className='text-base font-semibold'>$9999 | $199.00/night</div> : myDepartment?.title === "Mountain Majesty Tranquility Haven" ? <div className='text-base font-semibold'>$22000 | $199.00/night</div> : myDepartment?.title === "Urban Elegance Sophistication Haven" ? <div className='text-base font-semibold'>$77000 | $399.00/night</div> : myDepartment?.title === "Garden Grove Oasis Retreat Haven" ? <div className='text-base font-semibold'>$22000 | $199.00/night</div> : myDepartment?.title === "Seaside Bliss Modern Retreat" ? <div className='text-base font-semibold'>$44000 | $299.00/night</div> : myDepartment?.title === "Countryside Charm Rustic Escape" ? <div className='text-base font-semibold'>$12000 | $199.00/night</div> : ""}</div>
          </div>

          <div className='mt-3 flex items-center justify-between gap-2'>
            <span className='text-base text-secondary font-bold'>{myDepartment?.propertyType}</span>
            <div className='flex items-center gap-2'>
              <span className='text-base font-semibold'>5.0</span>
              <div className='flex items-center gap-2'>
                <Image src={star} alt='user-icon' width={25} height={25} className='w-[25px]'/>
                <Image src={star} alt='user-icon' width={25} height={25} className='w-[25px]'/>
                <Image src={star} alt='user-icon' width={25} height={25} className='w-[25px]'/>
                <Image src={star} alt='user-icon' width={25} height={25} className='w-[25px]'/>
                <Image src={star} alt='user-icon' width={25} height={25} className='w-[25px]'/>
              </div>
            </div>
          </div>

          <div className='mt-3 w-full flex items-center gap-2'>

            <div className='flex items-center gap-2 text-gray-50 font-medium border-r-[1px] border-gray-50 pr-2'><Image src={bed} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{myDepartment?.facilities.bedrooms}</div>
            <div className='flex items-center gap-2 text-gray-50 font-medium border-r-[1px] border-gray-50 pr-2'><Image src={bath} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{myDepartment?.facilities.bathrooms}</div>
            <div className='flex items-center gap-2 text-gray-50 font-medium border-r-[1px] border-gray-50 pr-2'><Image src={car} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{myDepartment?.facilities.garages}</div>
            <div className='flex items-center gap-2 text-gray-50 font-medium'><Image src={ruler} alt='seacrh-icon' width={20} height={20} className='w-[20px]'/>{myDepartment?.propertyType.toLowerCase() === "house" && myDepartment?.price.sale === 33000  ? 200 : myDepartment?.propertyType.toLowerCase() === "house" && myDepartment?.price.sale === 44000  ? 250 :  myDepartment?.propertyType.toLowerCase() === "apartment" && myDepartment?.price.sale === 99000 ? 399 : myDepartment?.propertyType.toLowerCase() === "apartment" && myDepartment?.price.sale === 12000 ? 700 :  myDepartment?.propertyType.toLowerCase() === "villa" ? 299 : myDepartment?.propertyType.toLowerCase() === "townhouse" ? 200 : ""}</div>

          </div>

          <h3 className='mt-8 text-xl font-semibold'>Property Details</h3>

          <p className='mt-2 text-[14px] font-normal text-gray-50'>{myDepartment?.description}</p>

          <h4 className='mt-8 text-xl font-semibold'>Amenities</h4>

          <div className='mt-2 flex items-center flex-wrap gap-2'>
            {myDepartment?.amenities.map((item , index)=>{
              return  <span className='px-4 py-1 rounded-full border-[1px] border-gray-50 bg-tertiary text-[14px] font-normal' key={index}>{item}</span>
            })}
          </div>

          <div className='mt-5 w-full lg:max-w-full p-2.5 bg-tertiary rounded-md'>
            <form className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
          
              <div className='w-full'>
                <label className='text-gray-50 flex items-center gap-2'><Image src={calendar} alt='user-icon' width={30} height={30} className='w-[30px]'/> Check In</label>
                <input type="date" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2'/>
              </div>
          
              <div className='w-full'>
                  <label className='text-gray-50 flex items-center gap-2'><Image src={calendar} alt='user-icon' width={30} height={30} className='w-[30px]'/> Check Out</label>
                  <input type="date" value={checkOut} onChange={(e)=>setCheckOut(e.target.value)} className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2'/>
              </div>
          
              <div className='w-full'>
                <label className='text-gray-50 flex items-center gap-2'><Image src={users} alt='user-icon' width={30} height={30} className='w-[30px]'/> Guests</label>
                <input type="number" value={Number(quantity)} onChange={(e)=>setQuantity(Number(e.target.value))} className='mt-2 w-full bg-white outline-none rounded-md border-[1px] border-gray-50 py-1 px-2'/>
              </div>
          
                <button onClick={(e)=>{e.preventDefault(); handelReserve()}}  className='cursor-pointer w-[180px] lg:w-[620px]  xl:w-[720px] flex items-center justify-center gap-2 bg-gray-50 rounded-md text-primary py-1 px-4'>
                  <Image src={search} alt='seacrh-icon' width={30} height={30} className='w-[30px]'/>
                  Book Property
                </button>
          
            </form>
          </div>
        </div>

        <div className='w-full xl:max-w-[30%] p-2.5 rounded-md border-[1px] border-gray-50'>
          <h5 className='text-xl font-bold'>Contact Agent</h5>

          <form className="mt-5 w-full flex flex-col gap-4">
            <input type='text' className='w-full rounded-md px-2 bg-white border-[1px] border-gray-50' placeholder='Your Name'/>
            <input type='email' className='w-full rounded-md px-2 bg-white border-[1px] border-gray-50' placeholder='Your Email'/>
            <textarea className='w-full h-[80px] rounded-md px-2 bg-white border-[1px] border-gray-50' placeholder='Your Message'></textarea>
            <button className='w-full px-2 py-2 bg-secondary rounded-md'>Send Message</button>
          </form>

          <h6 className='mt-8 text-xl font-bold'>For Buying Contact</h6>
          <div className='mt-3 rounded-md border-[1px] border-gray-50'>

            <div className='p-2 flex items-center justify-between gap-2 border-b-[1px] border-gray-50 pb-4'>
              <div>
                <p className='flex items-center gap-2 text-base font-semibold'>Prime Solutions <span className='px-1 py-1 rounded-full border-green-300 bg-green-400 text-[14px]'>Agency</span></p>
                <p className='text-gray-50 font-medium text-[14px]'>Agency Office</p>
              </div>
              <Image src={user} alt='user-icon' width={40} height={40} className='w-[40px] h-[40px] rounded-full'/>
            </div>

            <div className='p-2 flex items-center gap-2 border-b-[1px] border-gray-50 pb-2'>
              <div className='w-8 h-8 rounded-full bg-green-400 flex items-center justify-center'>
                <Image src={phone} alt='user-icon' width={20} height={20} className='w-[20px]'/>
              </div>
              <span className='text-gray-50 font-normal text-[14px]'>0123456789</span>
            </div>

            <div className='p-2 flex items-center gap-2 border-b-[1px] border-gray-50 pb-2'>
              <div className='w-8 h-8 rounded-full bg-green-400 flex items-center justify-center'>
                <Image src={mail} alt='user-icon' width={20} height={20} className='w-[20px]'/>
              </div>
              <span className='text-gray-50 font-normal text-[14px]'>contact@primesolutions.com</span>
            </div>

            <div className='flex items-center'>
              <div className='p-2 w-full flex items-center justify-center gap-2'>
                <Image src={mail} alt='user-icon' width={20} height={20} className='w-[20px]'/>
                <span className='text-gray-50 font-normal text-[14px]'>Send Email</span>
              </div>

              <div className='p-2 w-full flex items-center justify-center gap-2 border-l-[1px] border-gray-50'>
                <Image src={phone} alt='user-icon' width={20} height={20} className='w-[20px]'/>
                <span className='text-gray-50 font-normal text-[14px]'>Call Now</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
