import React from 'react'
import Logo from '@/public/Logo.png'
import Image from 'next/image'
import { InterFont } from '@/app/fonts/fonts'

const Topbar = () => {
  return (
    <div className='flex justify-between w-full h-fit'>
        <div className='flex items-center space-x-2'>
            <Image className='h-8 w-8' src={Logo} alt="Logo"/>
            <h1 className='font-bold text-base'>TTO</h1>
        </div>  
        <div className={`flex items-center text-sm ${InterFont.className}`}>
        <p>Already have an account ? <span className='text-[#636AE8FF] underline hover:cursor-pointer'>Sign in</span></p>
        </div>
    </div>
  )
}

export default Topbar