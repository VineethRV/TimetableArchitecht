"use client";

import React, { useState,useEffect } from "react";
import { Layout, Divider, Button } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserPen, faUserPlus, faChalkboardTeacher, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const { Header, Content ,Sider} = Layout;

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Router = useRouter();
  const [selected, setSelected] = useState("Modify Attributes");
  const menuItems = [
    { label: "Add a Teacher", icon: faUserPlus, url: "/Add" },
    { label: "Modify Attributes", icon: faUserPen, url: "" },
    { label: "Rank Timewise", icon: faClockRotateLeft, url: "/Rank-timetable" },
    {
      label: "Timeslot Dependent",icon: faCalendar,url: "/Timeslot-dependent",
    },
  ];

  useEffect(() => {
    const storedKey = localStorage.getItem('selected');
    if (storedKey) { 
      setSelected(storedKey);}},[]);
      const handleClick = (label: string, url: string) => {
        setSelected(label); 
        localStorage.setItem('selected', label); 
        Router.push(`/dashboard/teacher${url}`);
      };

  return (
    <Layout className='min-h-screen'>
      <Sider className="h-screen bg-white ">
        <div className="flex justify-left pt-[20px] pl-[20px] h-[7vh] ">
          <FontAwesomeIcon icon={faChalkboardTeacher} className='w-[30px] h-[40px]' />
          <span className=' pl-2 text-[18px] font-semibold text-[#171A1FFF]' style={{fontFamily:'Archivo'}}>Teachers</span> 
        </div>
        <Divider />
        <div className='pl-[10px] font-[14px] h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}} >
          {menuItems.slice(0, 2).map((item) => (
            <div
            className={`relative flex items-center justify-start pt-5 pl-5 text-[#565E6C] font-normal ${ selected === item.label ? 'item-selected' : '' }`}
              key={item.label}
              onClick={() => handleClick(item.label, item.url)}>
              <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
              <span className='pl-[10px]'>{item.label}</span>
            </div>
          ))}
        </div>
        <Divider />
        <div className='pl-[10px] font-[14px]  h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}}>
          {menuItems.slice(2, 4).map((item) => (
            <div
            className={`relative flex items-center justify-start pt-5 pl-5 text-[#565E6C] font-normal ${ selected === item.label ? 'item-selected' : ''}`}
              key={item.label}
              onClick={() => setSelected(item.label)}>
              <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
              <span className='pl-[10px]'>{item.label}</span>
            </div>
          ))}
            <Button
              onClick={() => Router.push(`/teacher/Consolidated`)} className='flex justify-center  mt-[25px] bg-[#636AE8FF] text-[#FFFFFF]'>
              Generate Consolidated 
            </Button>
        </div>
      </Sider>
      <Layout >
      <Header className="fixed h-[10vh] bg-white text-[#636AE8FF] text-2xl leading-[48px] font-extrabold pt-2" style={{ fontFamily:'Archivo', width: 'calc(100% - 20vw)' }}>Teachers</Header>
        <Content className="fixed  top-[10vh] overflow-y-auto h-[90vh] p-4 bg-white " style={{ width: 'calc(100% - 20vw )' }} >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
