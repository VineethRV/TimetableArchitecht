import { UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const StatsSection = () => {
  return (
    <div className="flex">
      <Card className="flex flex-col items-center px-4">
      <UserOutlined/>
      <h1 className="font-bold text-xl">1K+</h1>
      <h1>New Users</h1>
      </Card>
    </div>
  );
};

export default StatsSection;
