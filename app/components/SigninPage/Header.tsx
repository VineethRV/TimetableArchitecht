"use client"
import React from 'react'
import Logo from '@/public/Logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push('/')} className='flex w-fit space-x-2 px-4 py-4 items-center cursor-pointer'>
        <Image src={Logo} alt='Logo' className='h-8 w-8'/>
        <h1 className='font-bold text-base'>TTA</h1>
    </div>
  )
}

export default Header