import { Input } from "antd";
import React from "react";

const Form1 = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="font-bold text-sm">
          What is the name of the organisation?
        </h1>
        <Input placeholder="John Doe" />
      </div>

      <div className="flex flex-col space-y-1">
        <h1 className="font-bold text-sm">
          What is your designation in organisation?
        </h1>
        <Input placeholder="Assistant Professor" />
      </div>

      <div className="flex flex-col space-y-1">
        <h1 className="font-bold text-sm">
          Which department do you belong to?
        </h1>
        <Input placeholder="CSE" />
      </div>
    </div>
  );
};

export default Form1;
