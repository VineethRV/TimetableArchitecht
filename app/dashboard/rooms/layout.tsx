'use client';

import React, { useState } from 'react';
import { Layout, Divider, Button } from "antd"; 
const { Sider } = Layout;
import '../styles/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faBuildingUser, faCirclePlus, faClockRotateLeft,faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Sidebar: React.FC = () => { 

  const [selected, setSelected] = useState('Modify Attributes'); 
  const [buttonClicked, setButtonClicked] = useState(false); 

  const menuItems = [
    { label: 'Add a Room', icon: faCirclePlus },
    { label: 'Modify Attributes', icon: faPenToSquare },
    { label: 'Rank Timewise', icon: faClockRotateLeft },
    { label: 'Timeslot Dependent', icon: faCalendar }
  ];

  const handleButtonClick = () => {
    setButtonClicked(true);
    setSelected(''); 
  };
  return (
    <Layout  style={{ minHeight: '100vh' }}>
      <Sider className='sidepanel'>
                <div className="Sub-panel" style={{ height: '7vh' }}>
                      <FontAwesomeIcon icon={faBuildingUser} style={{width: '30px', height:'40px'}} />
                      <span className='Second-sub-panel-Heading'>Rooms</span> 
                  </div>
        <Divider/>
        <div className='Second-sub-panel-Body'>
            {menuItems.slice(0,2).map((item) => (
              <div className={`Sub-panel item ${selected === item.label ? 'item-selected' : ''}` } 
                key={item.label}
                onClick={() => setSelected(item.label)}>
                <FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '30px' }} />
                <span className='Sub-panel-text' >{item.label}</span>
              </div>
            ))}
         </div>
         <Divider/>
         <div className='Second-sub-panel-Body'>
            {menuItems.slice(2,4).map((item) => (
              <div className={`Sub-panel item ${selected === item.label ? 'item-selected' : ''}` } 
                key={item.label}
                onClick={() => setSelected(item.label)}>
                <FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '30px' }} />
                <span  className='Sub-panel-text'>{item.label}</span>
              </div>
            ))}
            <div style={{display:'flex', justifyContent:'center', paddingTop:'25px'}}>
            <Button onClick={handleButtonClick} style={{backgroundColor: '#636AE8FF',display:'flex', justifyContent:'center',color:'#FFFFFF',}}>Generate Consolidated</Button>
            </div>
         </div>
            
      </Sider>
      </Layout>
  );
}

export default Sidebar;
