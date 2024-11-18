"use client"
import { useState, useEffect } from 'react'
import React from "react";
import Topbar from "../components/SignupPage/Topbar";
import SignupForm from "../components/SignupPage/SignupForm";
import Footer from "../components/SignupPage/Footer";
import QuoteSection from "../components/SignupPage/QuoteSection";
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '@/lib/actions/auth';
import { toast } from 'sonner';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthentication(localStorage.getItem('token') || "").then((verify) => {
      if (verify) {
        router.push('/dashboard');
        toast.success('User already logged in !!');
      }

      setTimeout(() => setLoading(false), 1000);
    })
  }, [])

  if (loading) return <div>Loading....</div>

  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-between py-4 px-6">
        <Topbar />
        <SignupForm />
        <Footer />
      </div>
      <QuoteSection />
    </main>
  );
};

export default Page;
