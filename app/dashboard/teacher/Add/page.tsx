"use client";
import React from "react";
import { Button, message, Form, Input, Select, Tooltip, Upload } from "antd";
import Timetable from "@/app/components/timetable";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CiExport } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

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
  const router = useRouter();

  return (
    <div className="text-xl font-bold text-[#171A1F] pl-8 py-6 h-screen overflow-y-scroll">
      <div className="flex px-2 items-center justify-between text-[#636AE8FF] font-inter text-xl text-bold">
        <div
          onClick={() => {
            router.push("/dashboard/teacher");
          }}
          className="flex text-base w-fit cursor-pointer space-x-2"
        >
          <h1>&#8592;</h1>
          <h1>Back</h1>
        </div>
        <Upload>
          <Button
            icon={<CiExport />}
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
        className="flex mt-12 items-center pl-4"
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
            <Tooltip title="Click on the timeslots where to the teachers are busy to set them to busy">
              <IoIosInformationCircleOutline className="ml-2 text-[#636AE8FF]" />
            </Tooltip>
          </label>
          <Timetable />
          <div className="flex justify-end">
            <div className="flex space-x-4">
              <Form.Item>
                <Button className="border-[#636AE8FF] text-[#636AE8FF]">
                  Clear
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={success}
                  className="bg-primary text-[#FFFFFF]"
                >
                  Submit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default AddTeacherpage;
