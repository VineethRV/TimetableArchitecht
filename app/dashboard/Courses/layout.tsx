"use client";

import React, { useState } from "react";
import { Layout, Divider } from "antd";
const { Sider } = Layout;
import {
  FaBasketShopping,
  FaFlask,
  FaBook,
  FaCirclePlus,
  FaPenToSquare,
} from "react-icons/fa6"
import { useRouter, usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const Router = useRouter();
  const pathname = usePathname();
  const [selected1, setSelected1] = useState("Core Courses");
  const [selected2, setSelected2] = useState("Modify Course");

  const handleClick1 = (key: string, url: string) => {
    setSelected1(key);
    Router.push(url);
  };

  const handleClick2 = (key: string, url: string) => {
    setSelected2(key);
    Router.push(`${pathname}${url}`);
  };

  const menuItems1 = [
    { label: "Electives", icon: FaBasketShopping, url: "/subjects/Electives" },
    { label: "Labs", icon: FaFlask, url: "/subjects/Labs" },
    { label: "Core Courses", icon: FaBook, url: "/subjects/CoreCourses" },
  ];

  const menuItems2 = [
    { label: "Add a Course", icon: FaCirclePlus, url: "/add" },
    { label: "Modify Course", icon: FaPenToSquare, url: "" },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider className="fixed left-[5vw] top-0 w-[17vw] h-screen bg-white z-[100]">
        <div className="flex justify-left text-black-bold items-center pt-[20px] pl-[20px] h-[7vh] ">
          <FaBook className="w-[20px] h-[25px]" />
          <span
            className=" pl-2 text-[18px] font-semibold text-[#171A1FFF]"
            style={{ fontFamily: "Archivo" }}
          >
            Courses
          </span>
        </div>
        <Divider />
        <div
          className="pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left"
          style={{ fontFamily: "Inter" }}
        >
          {menuItems1.map(({label,icon:Icon,url}) => (
            <div
              className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${
                selected1 === label ? "item-selected" : ""
              }`}
              key={label}
              onClick={() => handleClick1(label, url)}
            >
              <Icon className="w-[20px] h-[30px]" />
              <span className="pl-[10px]">{label}</span>
            </div>
          ))}
        </div>
        <Divider />
        <div
          className="pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left"
          style={{ fontFamily: "Inter" }}
        >
          {menuItems2.map(({label,icon:Icon,url}) => (
            <div
              className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${
                selected2 === label ? "item-selected" : ""
              }`}
              key={label}
              onClick={() => handleClick2(label, url)}
            >
              <Icon className="w-[20px] h-[30px]" />
              <span className="pl-[10px]">{label}</span>
            </div>
          ))}
        </div>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
