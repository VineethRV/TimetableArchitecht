"use client";

import React, { useState } from 'react';
import { Layout, Divider, Button } from "antd"; 
const { Sider, Content,Header } = Layout;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping,faFlask, faBook, faCirclePlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useRouter,usePathname } from 'next/navigation';


const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    { label: "Electives", icon: faBasketShopping, url: "/subjects/Electives" },
    { label: "Labs", icon: faFlask, url: "/subjects/Labs" },
    { label: "Core Courses", icon: faBook, url: "/subjects/CoreCourses" },
  ];

  const menuItems2 = [
    { label: "Add a Course", icon: faCirclePlus, url: "/add" },
    { label: "Modify Course", icon: faPenToSquare, url: "" },
  ];

  return (
<Layout className='min-h-screen'>
      <Sider className="fixed left-[5vw] top-0 w-[17vw] h-screen bg-white z-[100]">
        <div className="flex justify-left text-black-bold items-center pt-[20px] pl-[20px] h-[7vh] ">
                      <FontAwesomeIcon icon={faBook} className='w-[20px] h-[25px]' />
             <span className=' pl-2 text-[18px] font-semibold text-[#171A1FFF]' style={{fontFamily:'Archivo'}}>Courses</span> 
        </div>
        <Divider/>
        <div className='pl-[10px] font-[14px] font-family-inter h-[25vh] flex flex-col justify-left' style={{fontFamily:'Inter'}}>
            {menuItems1.map((item) => (
              <div className={`relative flex items-center justify-start pt-5 pl-5 cursor-pointer text-[#565E6C] font-normal ${ selected1 === item.label ? 'item-selected' : '' }`}
                key={item.label}
                onClick={() => handleClick1(item.label,item.url)}>
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
                onClick={() => handleClick2(item.label,item.url)}>
                <FontAwesomeIcon icon={item.icon} className='w-[20px] h-[30px]' />
                <span className='pl-[10px]'>{item.label}</span>
              </div>
            ))}
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
