'use client';

import React, { useState } from 'react';
import { Layout, Divider, Button } from "antd"; 
const { Sider, Content } = Layout;
import '../styles/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping,faFlask, faBook, faCirclePlus, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useRouter,usePathname } from 'next/navigation';


const Sidebar: React.FC = () => { 
  const Router=useRouter();
  const pathname = usePathname();
  const [selected1, setSelected1] = useState('Core Courses'); 
  const [selected2, setSelected2] = useState('Modify Course'); 

  const handleClick1=(key:string,url:string)=>{
    setSelected1(key);
    Router.push(url);
  }

  const handleClick2=(key:string,url:string)=>{
    setSelected2(key);
    Router.push(`${pathname}${url}`);
  }

  const menuItems1 = [
    { label: 'Electives', icon: faBasketShopping,url:'/subjects/Electives' },
    { label: 'Labs', icon: faFlask,url:'/subjects/Labs' },
    { label: 'Core Courses', icon: faBook,url:'/subjects/CoreCourses'}
  ];

  const menuItems2 = [
    { label: 'Add a Course', icon: faCirclePlus,url:'/add' },
    { label: 'Modify Course', icon: faPenToSquare ,url:''}
  ];

  return (
    <Layout  style={{ minHeight: '100vh' }}>
      <Sider className='sidepanel'>
      <div className="Sub-panel" style={{ height: '7vh' }}>
             <FontAwesomeIcon icon={faBook} style={{width: '20px', height:'25px'}} />
             <span style={{ paddingLeft: '10px', fontSize: '18px'}}>Courses</span> 
        </div>
        <Divider/>
        <div style={{ height: '30vh', display: 'flex', flexDirection: 'column' , justifyContent: 'center'}}>
            {menuItems1.map((item) => (
              <div className="Sub-panel"
                key={item.label}
                onClick={() => handleClick1(item.label,item.url)}
                style={{
                  cursor: 'pointer',
                  color: selected1 === item.label ? '#636AE8FF' : ' #565E6CFF' 
                }}
              >
                <FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '30px' }} />
                <span style={{ paddingLeft: '10px', fontSize: '14px' , font: 'Inter' }}>{item.label}</span>
              </div>
            ))}
         </div>
         <Divider/>
         <div style={{display: 'flex', flexDirection: 'column' , justifyContent: 'center'}}>
            {menuItems2.map((item) => (
              <div className="Sub-panel"
                key={item.label}
                onClick={() => handleClick2(item.label,item.url)}
                style={{
                  cursor: 'pointer',
                  color: selected2 === item.label ? '#636AE8FF' : ' #565E6CFF'
                }}
              >
                <FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '30px' }} />
                <span style={{ paddingLeft: '10px', fontSize: '14px' , font: 'Inter' }}>{item.label}</span>
              </div>
            ))}
         </div>
      </Sider>
      </Layout>
  );
}

export default Sidebar;
