"use client";
import React from "react";
import CourseSidebar from '@/app/components/Navbar/SideNavbars/CourseSidebar'

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="inline-flex w-full min-h-screen">
    <CourseSidebar/>
    <div className="w-full h-full bg-white">
      {children}
    </div>
  </div>
  );
};

export default Sidebar;
