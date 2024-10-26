import React from 'react'
import Header from '../components/SigninPage/Header'
import SigninFormCard from '../components/SigninPage/SigninFormCard'

const Page = () => {
  return (
    <>
        <Header/>
        <div className='flex justify-center items-center h-[86vh]'>
        <SigninFormCard/>
        </div>
    </>
  )
}

export default Page