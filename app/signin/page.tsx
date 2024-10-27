import React from 'react';
import Header from '../components/SigninPage/Header';
import SigninFormCard from '../components/SigninPage/SigninFormCard';
import SignInIllus1 from '@/public/Illustrations/Sign1.png';
import SignInIllus2 from '@/public/Illustrations/Sign2.png';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden bg-gray-50">
        <Image
          className="absolute w-[370px] h-[370px] bottom-[-50px] left-[-50px] opacity-80"
          src={SignInIllus1}
          alt="Signin1"
        />
        <Image
          className="absolute w-[370px] h-[370px] bottom-[-100px] right-[-50px] opacity-80"
          src={SignInIllus2}
          alt="Signin2"
        />
        <Header />
        <div className="flex justify-center items-center h-[86vh]">
          <SigninFormCard />
        </div>
      </div>
    </>
  );
};

export default Page;
