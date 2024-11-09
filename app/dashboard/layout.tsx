'use client';
import React from 'react'; 
import { Layout } from 'antd';
import DashboardSidebar from '../components/Navbar/SideNavbars/DashboardSidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <Layout>
          <DashboardSidebar/>
          <div className='w-full h-screen'>
            {children}
          </div>
        </Layout>
  );
}
