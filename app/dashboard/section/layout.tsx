'use client';
import React from 'react'; 
import { Layout } from 'antd';
import ClassSidebar from '@/app/components/Navbar/SideNavbars/ClassSidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="min-h-screen">
    <ClassSidebar/>
    <div className="w-full h-full bg-white">
      {children}
    </div>
  </Layout>
  );
}
