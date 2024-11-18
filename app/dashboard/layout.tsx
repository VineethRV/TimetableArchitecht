'use client';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import DashboardSidebar from '../components/Navbar/SideNavbars/DashboardSidebar';
import { checkAuthentication } from '@/lib/actions/auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthentication(localStorage.getItem('token') || "").then((verify) => {
      if (!verify) {
        toast.error("Please login to continue");
        router.push('/signin');
      }
      setTimeout(() => setLoading(false), 2000);
    })
  }, [])

  return (
    <Layout>
      <DashboardSidebar />
      <div className='w-full h-screen'>
        {loading ? <>Loading....</> : <>{children}</>}
      </div>
    </Layout>
  );
}
