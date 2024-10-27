import React from 'react'
import OnBoardIllus from '@/public/Illustrations/OnBoard.png'
import Image from 'next/image'

const Illustration = () => {
  return (
    <div className='bg-[#F8F9FAFF] flex justify-center items-center'>
            <Image className='w-[460px] h-[280px]' alt='OnBoarding' src={OnBoardIllus}/>
    </div>
  )
}

export default Illustration