"use client"
import { Button, Input } from 'antd'
import React from 'react'
import { InterFont } from '@/app/fonts/fonts'
import { FaEyeSlash, FaUser } from 'react-icons/fa6'
import { FaEye } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const SignupForm = () => {

  return (
    <div className='flex flex-col space-y-5 px-36'>

      <h1 className='font-bold text-3xl text-center'>Create an account</h1>
      <div className='flex flex-col space-y-1'>
        <h1 className={`font-bold text-sm ml-1 ${InterFont.className}`}>Full name</h1>
        <Input size="large" placeholder="John Doe" prefix={<FaUser className='pr-2 h-6 w-6' />} />
      </div>

      <div className='flex flex-col space-y-1'>
        <h1 className={`font-bold text-sm ml-1 ${InterFont.className}`}>Email</h1>
        <Input size="large" placeholder="example@gmail.com" prefix={<IoMail className='pr-2 h-6 w-6' />} />
      </div>

      <div className='flex flex-col space-y-1'>
        <h1 className={`font-bold text-sm ml-1 ${InterFont.className}`}>Password</h1>
        <Input.Password
          placeholder="Enter at least 8+ characters"
          iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
          className='text-base'
        />
      </div>

      <Button className='py-5 bg-[#636AE8FF] text-white font-bold'>Sign up</Button>
    </div>
  )
}

export default SignupForm
