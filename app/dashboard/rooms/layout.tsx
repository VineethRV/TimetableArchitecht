"use client";
import React from "react";
import RoomsSidebar from "@/app/components/Navbar/SideNavbars/RoomSidebar";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="inline-flex w-full min-h-screen">
      <RoomsSidebar />
      <div className="w-full h-full bg-white">{children}</div>
    </div>
  );
};

export default Sidebar;
