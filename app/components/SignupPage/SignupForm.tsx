"use client"
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React from 'react'
import { InterFont } from '@/app/fonts/fonts'

const SignupForm = () => {
  return (
    <div className='flex flex-col space-y-5 px-36'>
      
        <h1 className='font-bold text-3xl text-center'>Create an account</h1>
        <div className='flex flex-col space-y-1'>
          <h1 className={`font-bold text-sm ml-1 ${InterFont.className}`}>Full name</h1>
        <Input size="large" placeholder="John Doe" prefix={<UserOutlined className='pr-2' />} />
        </div>

        <div className='flex flex-col space-y-1'>
          <h1 className={`font-bold text-sm ml-1 ${InterFont.className}`}>Email</h1>
        <Input size="large" placeholder="example@gmail.com" prefix={<MailOutlined className='pr-2' />} />
        </div>

        <div className='flex flex-col space-y-1'>
          <h1 className={`font-bold text-sm ml-1 ${InterFont.className}`}>Password</h1>
        <Input.Password
        placeholder="Enter at least 8+ characters"
        iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
        className='text-base'
      />
       </div>
      
      <Button className='py-5 bg-[#636AE8FF] text-white font-bold'>Sign up</Button>
    </div>
  )
}

export default SignupForm