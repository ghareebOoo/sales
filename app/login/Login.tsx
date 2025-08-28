"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sales from "../../public/src/assets/sales.jpg"
import Link from 'next/link'
import * as yup from "yup"
import toast from "react-hot-toast";
import axios from 'axios'
import {useFormik} from "formik"
import { useRouter } from 'next/navigation'
import { useDepartment } from '@/context/SalesContext'
import { UAParser } from 'ua-parser-js'
export default function Login() {

    const {setToken} = useDepartment()

    const [showLogin , setShowLogin] = useState(true)

    const [errorMsg , setErrorMsg] = useState(null)

   const router = useRouter()

    type ourRegister = {
      name: string;
      email: string;
      phone: string;
      password: string;
      rePassword: string;
    }

    type ourLogin = {
      email: string;
      password: string;
    }
    
    const validationRegister = yup.object({
        name: yup.string().required("name is required").min(3, "name must be more than 3 characters").max(25, "name must be less than 25 characters"),
        email: yup.string().required("email is required").email("email is not valid"),
        phone: yup.string().required("phone is required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid phone number forma"),
        password: yup.string().required("password is required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        rePassword: yup.string().required("rePassword is required").oneOf([yup.ref("password")] , "password and repassowrd must be the same"),
    })

    const validationLogin = yup.object({
        email: yup.string().required("email is required").email("email is not valid"),
        password: yup.string().required("password is required")
    })

    const handelRegister = async (values:ourRegister)=>{
        const id = toast.loading("Trying To Craete An Account")
        try{
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
                method: "post",
                data:{
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                    rePassword: values.rePassword
                }
            }

            const {data} = await axios.request(options)
            toast.dismiss(id)
            console.log(data)
            if(data.message === "success"){
                toast.success("user created successfully")
                setShowLogin(true)
            }
        }catch(error:any){
            toast.dismiss(id)
            setErrorMsg(error.response.data.message)
            console.log(error)
        }
    } 


    const getIp = async():Promise<string>=>{
        try{
            const response = await fetch("https://api.ipify.org?format=json" , {cache: "no-store"})
            const data = await response.json()
            return data?.id ?? "unKnown"
        }catch{
            return "unknown"
        }
    }

    const handelLogin = async (values:ourLogin)=>{
       
        const id = toast.loading("Trying To Login")
        const parser = new UAParser()
        const browser = parser.getBrowser()
        const device = parser.getDevice()
        const os = parser.getOS()
        const ip = await getIp()
        try{
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
                method: "post",
                data:{
                    email: values.email,
                    password: values.password,
                    browserName: browser.name,
                    borwserVergin: browser.version,
                    borwserMajor: browser.major,
                    browserType: browser.type,
                    deviceType: device.type,
                    deviceModel: device.model,
                    os: os.name + "" + os.version,
                    ipAddress: ip
                }
            }

            const {data} = await axios.request(options)
            toast.dismiss(id)
            console.log(data)
            setToken(data.token)
            localStorage.setItem("token" , data.token)
            if(data.message === "success"){
                toast.success("you are logedin successfully")
                router.push("/")
            }
        }catch(error:any){
            toast.dismiss(id)
            setErrorMsg(error.response.data.message)
            console.log(error)
        }
    } 

    const formikRegister = useFormik<ourRegister>({
        initialValues:{
            name: "",
            email: "",
            phone: "",
            password: "",
            rePassword: "",
        },
        onSubmit: handelRegister,
        validationSchema : validationRegister
    })

    const formikLogin = useFormik<ourLogin>({
        initialValues:{
            email: "",
            password: "",
        },
        onSubmit: handelLogin,
        validationSchema : validationLogin
    })


 
  return (
    <div className='px-4 md:px-0 py-12 md:py-0'>
        <div className='flex items-center gap-8'>

            <div className='hidden md:block w-full h-screen'>
                <Image src={sales} alt='image' width={500} height={500} className='w-full h-screen object-cover' />
            </div>
            <div className='w-full md:px-4'>
               

                {!showLogin &&  <form onSubmit={formikRegister.handleSubmit} className='mt-3'>

                    <h2 className='font-bold text-2xl'>Register</h2>

                    <div className='w-full md:max-w-[450px] flex flex-col gap-1'>
                        <label className='font-normal text-base'>Name</label>
                        <input autoComplete="off" onPaste={(e) => e.preventDefault()} name='name' value={formikRegister.values.name} onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} type='text' className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Name'/>
                        {formikRegister.errors.name && formikRegister.touched.name && <div className='text-red-500'>*{formikRegister.errors.name}</div>}
                    </div>


                    <div className='w-full md:max-w-[450px] mt-1 flex flex-col gap-1'>
                        <label className='font-normal text-base'>Email</label>
                        <input autoComplete="off" onPaste={(e) => e.preventDefault()} type='email' name='email' value={formikRegister.values.email} onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Email'/>
                        {formikRegister.errors.email && formikRegister.touched.email && <div className='text-red-500'>*{formikRegister.errors.email}</div>}
                        {errorMsg && <div className='text-red-500'>*{errorMsg}</div>}
                    </div>

               
                    <div className='w-full md:max-w-[450px] mt-1 flex flex-col gap-1'>
                        <label className='font-normal text-base'>Password</label>
                        <input onCopy={(e) => e.preventDefault()} type='password' name='password' value={formikRegister.values.password} onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Password'/>
                        {formikRegister.errors.password && formikRegister.touched.password && <div className='text-red-500'>*{formikRegister.errors.password}</div>}
                    </div>
                  

                    <div className='w-full md:max-w-[450px] mt-1 flex flex-col gap-1'>
                        <label className='font-normal text-base'>Repassword</label>
                        <input onCopy={(e) => e.preventDefault()} type='password' name='rePassword' value={formikRegister.values.rePassword} onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Repassword'/>
                        {formikRegister.errors.rePassword && formikRegister.touched.rePassword && <div className='text-red-500'>*{formikRegister.errors.rePassword}</div>}
                    </div>

                    <div className='w-full md:max-w-[450px] mt-1 flex flex-col gap-1'>
                        <label className='font-normal text-base'>Phone</label>
                        <input onPaste={(e) => e.preventDefault()} type='tel' name='phone' value={formikRegister.values.phone} onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Phone'/>
                        {formikRegister.errors.phone && formikRegister.touched.phone && <div className='text-red-500'>*{formikRegister.errors.phone}</div>}
                    </div>

                    <button type='submit' className='cursor-pointer mt-3 block w-full md:max-w-[450px] px-2 py-1 bg-black text-white rounded-md'>Sing Up</button>


                    <Link href={"#"} className={`block mt-3 underline text-gray-50 text-base font-medium`}>Already have an account <span onClick={()=>setShowLogin(!showLogin)}>Login</span></Link>
                </form> }

                {showLogin &&  <form onSubmit={formikLogin.handleSubmit} className='mt-3'>

                    <h2 className='font-bold text-2xl'>Login</h2>


                    <div className='w-full md:max-w-[450px] mt-1 flex flex-col gap-1'>
                        <label className='font-normal text-base'>Email</label>
                        <input autoComplete="off" onPaste={(e) => e.preventDefault()} type='email' name='email' value={formikLogin.values.email} onBlur={formikLogin.handleBlur} onChange={formikLogin.handleChange} className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Email'/>
                        {formikLogin.errors.email && formikLogin.touched.email && <div className='text-red-500'>*{formikLogin.errors.email}</div>}
                    </div>

                    <div className='w-full md:max-w-[450px] mt-1 flex flex-col gap-1'>
                        <label className='font-normal text-base'>Password</label>
                        <input onCopy={(e) => e.preventDefault()} type='password' name='password' value={formikLogin.values.password} onBlur={formikLogin.handleBlur} onChange={formikLogin.handleChange} className='w-full bg-tertiary rounded-md border-[1px] border-gray-50 px-2 py-1' placeholder='Password'/>
                        {formikLogin.errors.password && formikLogin.touched.password && <div className='text-red-500'>*{formikLogin.errors.password}</div>}
                    </div>
                    {errorMsg && <div className='text-red-500'>*{errorMsg}</div>}
                    <button type='submit' className='cursor-pointer mt-3 block w-full md:max-w-[450px] px-2 py-1 bg-black text-white rounded-md'>Login</button>

                    <Link href={"#"} className={`block mt-3 underline text-gray-50 text-base font-medium`}>Don{`'`}t have an account? <span onClick={()=>setShowLogin(!showLogin)}>Create account</span></Link> 

                </form> }

           

            </div>

        </div>
    </div>
  )
}
