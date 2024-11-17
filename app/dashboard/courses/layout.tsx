"use client";

import React from "react";
import { Layout } from "antd";
import CourseSidebar from '@/app/components/Navbar/SideNavbars/CourseSidebar'

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <Layout className="min-h-screen">
      <CourseSidebar/>
      <div className="w-full h-full bg-white">
        {children}
      </div>
    </Layout>
  );
};

export default Sidebar;
