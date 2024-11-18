'use client';
import React from 'react';
import ClassSidebar from '@/app/components/Navbar/SideNavbars/ClassSidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-full min-h-screen">
    <ClassSidebar/>
    <div className="w-full h-full bg-white">
      {children}
    </div>
  </div>
  );
}
