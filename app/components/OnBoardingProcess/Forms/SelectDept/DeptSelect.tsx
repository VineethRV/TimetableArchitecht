import React, { useState } from "react";
import { Select } from "antd";

const OPTIONS = [
  "Aeronautical Engineering",
  "Automobile Engineering",
  "Biotechnology Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Computer Science and Engineering",
  "Computer Science and Design",
  "Electronics and Communication Engineering",
  "Electrical and Electronics Engineering",
  "Environmental Engineering",
  "Information Science and Engineering",
  "Industrial and Production Engineering",
  "Instrumentation Technology",
  "Mechanical Engineering",
  "Mechatronics Engineering",
  "Medical Electronics",
  "Mining Engineering",
  "Robotics and Automation Engineering",
  "Telecommunication Engineering",
  "Computer Science and Cybersecurity",
  "Computer Science and Data Science",
];

const DeptSelect: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      mode="multiple"
      placeholder="Select your departments"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: "100%" }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default DeptSelect;
