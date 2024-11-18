"use client";
import React from "react";
import TeachersSidebar from '@/app/components/Navbar/SideNavbars/TeachersSidebar'

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="inline-flex w-full min-h-screen">
    <TeachersSidebar/>
    <div className="w-full h-full bg-white">
      {children}
    </div>
  </div>
  );
};

export default Sidebar;
