'use client';

import React, { useState,useEffect } from 'react'; 
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGear, faUserGraduate, faBuilding, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [selectedKey, setSelectedKey] = useState(""); 
  const Router = useRouter();

  useEffect(() => {
    const storedKey = localStorage.getItem('selectedKey');
    if (storedKey) { 
      setSelectedKey(storedKey);}},[]);

  const handleMenuClick = (key: string, page: string) => {
    setSelectedKey(key);
    localStorage.setItem('selectedKey', key); 
    Router.push(`/dashboard${page}`);
  };

  const menuItems = [
    { key: "1", title: "Settings", icon: faGear, path: "/" },
    { key: "2", title: "Teaching", icon: faChalkboardTeacher, path: "/teacher" },
    { key: "3", title: "Departments", icon: faBuilding, path: "/rooms" },
    { key: "4", title: "Resources", icon: faBook, path: "/courses/core-courses" },
    { key: "5", title: "Students", icon: faUserGraduate, path: "/classes" },
  ];

  return (
    <html lang="en">
      <body >
        <Layout>
        <Sider width='5%' className="h-screen bg-gray-800" >
          <div className="flex justify-center items-center my-4">
            <img
              src="/Icontemp.svg"
              alt="TTA"
              className="w-9 h-9"
            />
          </div>
            <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }} className="flex justify-center mt-[5vh] ">
            <Menu
              mode="vertical"
              className="bg-gray-800"
              selectedKeys={[selectedKey]}>
              {menuItems.map(({ key, title, icon, path }) => (
                <Menu.Item
                  key={key}
                  title={title}
                  onClick={() => handleMenuClick(key, path)}>
                  <FontAwesomeIcon
                    icon={icon}
                    className={selectedKey === key ? "text-indigo-500" : "text-gray-400"}/>
                </Menu.Item>
              ))}
            </Menu>
            </motion.div>
        </Sider>
        <div > 
          {children}
        </div>
        </Layout>
      </body>
    </html>
  )
}
