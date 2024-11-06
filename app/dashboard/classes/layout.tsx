'use client';

import React, { useState } from 'react';
import { Layout, Divider, Button } from "antd"; 
const { Sider, Content } = Layout;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChalkboardTeacher, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';



const Sidebar: React.FC = () => { 

  const [selected1, setSelected1] = useState('Core Courses'); 
  const [selected2, setSelected2] = useState('Add a Course'); 

  const menuItems1 = [
    { label: 'Electives', icon: faChalkboardTeacher },
    { label: 'Labs', icon: faChalkboardTeacher },
    { label: 'Core Courses', icon: faClockRotateLeft }
  ];

  const menuItems2 = [
    { label: 'Add a Course', icon: faCalendar },
    { label: 'Modify Course', icon: faCalendar }
  ];

  return (
    <Layout className='min-h-screen'>
      <Sider className="fixed left-[5vw] top-0 w-[17vw] h-screen bg-white z-[100]">
        <div className="flex justify-left text-black-bold items-center pt-[20px] pl-[20px] h-[7vh] ">
             <FontAwesomeIcon icon={faChalkboardTeacher} className='w-[30px] h-[40px]'/>
             <span className=' pl-2 text-[18px] font-semibold text-[#171A1FFF]' style={{fontFamily:'Archivo'}}>Courses</span> 
        </div>
        <Divider/>
        <div className='pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}}>
            {menuItems1.map((item) => (
              <div className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${ selected1 === item.label ? 'item-selected' : '' }`}
                key={item.label}
                onClick={() => setSelected1(item.label)}>
                <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
                <span className='pl-[10px]'>{item.label}</span>
              </div>
            ))}
         </div>
         <Divider/>
         <div className='pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}}>
            {menuItems2.map((item) => (
              <div className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${ selected2 === item.label ? 'item-selected' : '' }`}
                key={item.label}
                onClick={() => setSelected2(item.label)}>
                <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
                <span className='pl-[10px]'>{item.label}</span>
              </div>
            ))}
         </div>
      </Sider>
      </Layout>
  );
}

export default Sidebar;
