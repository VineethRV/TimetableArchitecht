import React from 'react';
import { Spin } from 'antd';

const App: React.FC = () => (
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
    <Spin tip="Loading" size="large"/>
    </div>
);

export default App;