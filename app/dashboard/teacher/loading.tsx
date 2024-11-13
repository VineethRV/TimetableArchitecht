import React from 'react';
import { Spin } from 'antd';

const App: React.FC = () => (
  <div className="flex justify-center items-center w-full h-screen">
    <Spin tip="Loading" size="large" />
  </div>
);

export default App;
