'use client';

import React, { useState } from 'react';
import { Layout, Divider, Button } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserPen, faUserPlus, faChalkboardTeacher, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import Sider from 'antd/es/layout/Sider';

const { Header, Content } = Layout;

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Router = useRouter();
  const [selected, setSelected] = useState('Modify Attributes'); 
  const menuItems = [
    { label: 'Add a Teacher', icon: faUserPlus, url: '/Add' },
    { label: 'Modify Attributes', icon: faUserPen, url: '' },
    { label: 'Rank Timewise', icon: faClockRotateLeft, url: '/Rank-timetable' },
    { label: 'Timeslot Dependent', icon: faCalendar, url: '/Timeslot-dependent' }
  ];

  const handleClick = (label: string, url: string) => {
    setSelected(label); 
    Router.push(`/dashboard/teacher${url}`);
  };

  return (
    <Layout className='min-h-screen'>
      <Sider className="fixed left-[5vw] top-0 w-[17vw] h-screen bg-white z-[100]">
        <div className="flex justify-left text-black-bold items-center pt-[20px] pl-[20px] h-[7vh] ">
          <FontAwesomeIcon icon={faChalkboardTeacher} className='w-[30px] h-[40px]' />
          <span className=' pl-2 text-[18px] font-semibold text-[#171A1FFF]' style={{fontFamily:'Archivo'}}>Teachers</span> 
        </div>
        <Divider />
        <div className='pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}} >
          {menuItems.slice(0, 2).map((item) => (
            <div
            className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${ selected === item.label ? 'item-selected' : '' }`}
              key={item.label}
              onClick={() => handleClick(item.label, item.url)}
            >
              <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
              <span className='pl-[10px]'>{item.label}</span>
            </div>
          ))}
        </div>
        <Divider />
        <div className='pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}}>
          {menuItems.slice(2, 4).map((item) => (
            <div
            className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${ selected === item.label ? 'item-selected' : ''}`}
              key={item.label}
              onClick={() => setSelected(item.label)}
            >
              <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
              <span className='Sub-panel-text'>{item.label}</span>
            </div>
          ))}
            <Button
              onClick={() => Router.push(`/teacher/Consolidated`)} className='flex justify-center ml-[5px] mr-[10px] mt-[25px] bg-[#636AE8FF] text-[#FFFFFF]'>
              Generate Consolidated 
            </Button>
        </div>
      </Sider>
      <Header className="fixed top-0 left-[20vw] h-[10vh] bg-white text-[#636AE8FF] text-2xl leading-[48px] font-extrabold pt-2" style={{ fontFamily:'Archivo', width: 'calc(100% - 20vw)' }}>Teachers</Header>
      <Layout className="fixed left-[20vw] top-[10vh] overflow-y-auto h-[90vh] p-4 bg-white flex-grow" style={{ width: 'calc(100% - 20vw)' }} >
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
