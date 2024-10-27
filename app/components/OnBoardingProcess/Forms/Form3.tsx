"use client";
import React from "react";
import DeptSelect from "./SelectDept/DeptSelect";

const Form3 = () => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="font-bold text-sm">
        Select the departments in your organizations
      </h1>
      <DeptSelect />
    </div>
  );
};

export default Form3;
