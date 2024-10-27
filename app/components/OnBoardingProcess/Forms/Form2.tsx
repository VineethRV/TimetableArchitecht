import { Input } from "antd";
import React from "react";

const Form2 = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="font-bold text-sm">
          For how many sections will you be creating timetables?
        </h1>
        <Input placeholder="" />
      </div>

      <div className="flex flex-col space-y-1">
        <h1 className="font-bold text-sm">
          For how many teachers and rooms do you plan to allocate?
        </h1>
        <Input placeholder="" />
      </div>

      <div className="flex flex-col space-y-1">
        <h1 className="font-bold text-sm">
          What is the total no of students in your organisation?
        </h1>
        <Input placeholder="" />
      </div>
    </div>
  );
};

export default Form2;
