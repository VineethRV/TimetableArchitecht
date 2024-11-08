"use client";
import {
  ExportOutlined,
  ImportOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Divider, Input, Select } from "antd";
import { TbTrash } from "react-icons/tb";
import TeachersTable from '@/app/components/TeachersPage/TeachersTable'

function page() {
  return (
    <div className="h-screen px-8 py-4">
      <h1 className="text-3xl font-bold text-primary mt-2">Teachers</h1>
      <div className="flex space-x-3 justify-end py-2">
        <Button className="bg-[#F2F2FDFF] text-primary font-bold">
          <ImportOutlined />
          Import
        </Button>
        <Button className="bg-primary text-white font-bold">
          <ExportOutlined />
          Export
        </Button>
      </div>
      <div className="flex space-x-8 justify-between py-4">
        <Input
          className="w-fit"
          addonBefore={<SearchOutlined />}
          placeholder="Teacher"
        />
        
        {/* this config to set background color of the selectors | did as specified in antd docs */}
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: "#F3F4F6FF",
              },
            },
          }}
        >
          <div className="flex space-x-3">
            <Select
              defaultValue="Sort By"
              style={{ width: 120 }}
              options={[]}
            />
            <Select defaultValue="All Departments" options={[]} />
            <Select defaultValue="All Designations" options={[]} />
          </div>
        </ConfigProvider>
        <div className="flex space-x-2">
        <Button className="bg-red-500 text-white font-bold">
        <TbTrash/>Delete
      </Button>
      <Button>Clear filters</Button>
      </div>
        </div>
      
      <TeachersTable/>
      
    </div>
  );
}

export default page;
