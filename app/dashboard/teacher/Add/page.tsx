"use client";
import React from "react";
import { InfoCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Form, Input, Select, Tooltip, Upload } from "antd";
import Timetable from "@/app/components/timetable";
import { motion } from "framer-motion";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const AddTeacherpage: React.FC = () => {
  const [form] = Form.useForm();
  const success = () => {
    message.success("Teacher Added successfully!", 5);
  };

  return (
    <div className="font-inter text-[18px] leading-[28px] font-bold text-[#171A1F] ml-5 mt-5">
      <div className="flex justify-between text-[#636AE8FF] font-inter text-[18px] leading-[28px] text-bold mr-8">
        &#8592; Back
        <Upload>
          <Button
            icon={<UploadOutlined />}
            className="text-[#636AE8FF] border-[#636AE8FF] "
          >
            Import
          </Button>
        </Upload>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex justify-left items-center h-[86vh] mt-[40vh] ml-4 "
      >
        <Form {...formItemLayout} form={form} layout="vertical" requiredMark>
          <Form.Item label="Teacher Name" required>
            <Input placeholder="Name" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item label="Initials" required>
            <Input placeholder="Initials" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item label="Email Id" required>
            <Input placeholder="Email Id" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item label="Department" name="Select">
            <Select className="font-inter font-normal" />
          </Form.Item>
          <label>
            <span>Schedule</span>
            <Tooltip
              title="Tooltip with customize icon"
              icon={<InfoCircleOutlined />}
            >
              <InfoCircleOutlined className="ml-2 text-[#636AE8FF]" />
            </Tooltip>
          </label>
          <div className="flex justify-left">
            <Timetable />
          </div>
          <div className="flex justify-end w-[55vm]">
            <Form.Item>
              <Button className="border-[#636AE8FF] text-[#636AE8FF] mr-[30px] w-[75px] h-[32px]">
                Clear
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={success}
                className="bg-[#636AE8FF] text-[#FFFFFF] w-[75px] h-[32px]"
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default AddTeacherpage;
