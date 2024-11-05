'use client';

import React, { useState } from 'react'; 
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGear, faUserGraduate,faBuilding,faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import './styles/styles.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedKey, setSelectedKey] = useState("1"); 
  const Router=useRouter();


  const handleMenuClick = (key: string,page: string) => {
    setSelectedKey(key);
    Router.push(page);
  };

  const menuItems = [
    { key: "1", title: "Settings", icon: faGear, path: "/dashboard" },
    { key: "2", title: "Teaching", icon: faChalkboardTeacher, path: "/dashboard/teacher" },
    { key: "3", title: "Departments", icon: faBuilding, path: "/dashboard/rooms" },
    { key: "4", title: "Resources", icon: faBook, path: "/dashboard/Courses/CoreCourses" },
    { key: "5", title: "Students", icon: faUserGraduate, path: "/dashboard/classes" },
  ];
  return (
    <html lang="en">
      <body>
        <Sider width='5vw' style={{
          backgroundColor: '#1D2128FF',
          height: '100vh',
          left: '0px',
          top: '0px',
          position: 'fixed',
          zIndex: '1000',
        }}>
          <div className='centered-icon-container'>
            <img
              src="/Icontemp.svg"
              alt="TTA"
              style={{
                width: '36px',
                height: '36px',
              }}
            />
          </div>
          <div className='centered-buttons-container'>
          <Menu
  mode="vertical"
  className="icon-only-menu"
  style={{ backgroundColor: '#1D2128FF' }}
  defaultSelectedKeys={["1"]}
>
  {menuItems.map(({ key, title, icon, path }) => (
    <Menu.Item
      key={key}
      title={title}
      onClick={() => handleMenuClick(key, path)}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ color: selectedKey === key ? "#636AE8FF" : "#565E6CFF" }}
      />
    </Menu.Item>
  ))}
</Menu>
          </div>
        </Sider>
        <div style={{ marginLeft: 200 }}> 
          {children}
        </div>
      </body>
    </html>
  )
}
