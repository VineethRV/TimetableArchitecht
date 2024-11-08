"use client";

import React from "react";
import { Layout } from "antd";
import TeachersSidebar from '@/app/components/Navbar/SideNavbars/TeachersSidebar'

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <Layout className="min-h-screen">
      <TeachersSidebar/>
      <div className="w-full h-full bg-white">
        {children}
      </div>
    </Layout>
  );
};

export default Sidebar;
