"use client"
import { Button, Card } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const AskUniversity = () => {
  const router = useRouter();
  return (
    <div className='px-36 py-8'>
    <Card className='bg-[#636AE8FF] p-6'>
        <div className='flex flex-col space-y-4 items-center'>
        <h1 className='text-4xl font-bold text-white'>Are you a university?</h1>
        <p className='text-sm text-white'>Get started by applying for access to the timetable architect to create efficient and optimized timetables.</p>
        <Button onClick={()=>router.push('/onboarding')} className="p-4 w-fit">Apply now</Button>
        </div>
    </Card>
    </div>
  )
}

export default AskUniversity