"use client";

import React from "react";
import { Layout } from "antd";
import RoomsSidebar from '@/app/components/Navbar/SideNavbars/RoomSidebar'

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <Layout className="min-h-screen">
      <RoomsSidebar/>
      <div className="w-full h-full bg-white">
        {children}
      </div>
    </Layout>
  );
};

export default Sidebar;
