'use client';

import React, { useState } from 'react';
import { Layout, Divider, Button } from "antd";
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserPen, faUserPlus, faChalkboardTeacher, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

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
    Router.push(`/teacher${url}`);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div className="sidepanel">
        <div className="Sub-panel" style={{ height: '7vh' }}>
          <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '40px' }} />
          <span className='Second-sub-panel-Heading'>Teachers</span> 
        </div>
        <Divider />
        <div className='Second-sub-panel-Body'>
          {menuItems.slice(0, 2).map((item) => (
            <div
              className={`Sub-panel item ${selected === item.label ? 'item-selected' : ''}`}
              key={item.label}
              onClick={() => handleClick(item.label, item.url)}
            >
              <FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '30px' }} />
              <span className='Sub-panel-text'>{item.label}</span>
            </div>
          ))}
        </div>
        <Divider />
        <div className='Second-sub-panel-Body'>
          {menuItems.slice(2, 4).map((item) => (
            <div
              className={`Sub-panel item ${selected === item.label ? 'item-selected' : ''}`}
              key={item.label}
              onClick={() => setSelected(item.label)}
            >
              <FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '30px' }} />
              <span className='Sub-panel-text'>{item.label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
            <Button
              onClick={() => Router.push(`/teacher/Consolidated`)}
              style={{
                backgroundColor: '#636AE8FF',
                color: '#FFFFFF',
              }}
            >
              Generate Consolidated
            </Button>
          </div>
        </div>
      </div>
      <Header className='header'>Teachers</Header>
      <Layout className='main-body'>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
