import Image from 'next/image'
import React from 'react'
import Logo from '@/public/Logo.png'

const LogoHeader = () => {
  return (
    <div className='flex space-x-2 items-center'>
            <Image src={Logo} alt='Logo' className='h-8 w-8'/>
            <h1 className='font-bold text-base'>TTA</h1>
    </div>
  )
}

export default LogoHeader