'use client';
import React from 'react';
import { InfoCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, Select, Tooltip, Upload,InputNumber,Radio } from 'antd';
import Timetable from '@/app/components/timetable';
import { motion } from 'framer-motion'
import { CiExport } from 'react-icons/ci';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { useRouter } from "next/navigation";
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

const AddRoomForm: React.FC = () => {
  const [form] = Form.useForm();
  const success = () => {
    message.success("Room Added successfully!", 3);
  };
  const router = useRouter();

  return (
  
    <div className="text-xl font-bold text-[#171A1F] pl-8 py-6 h-screen overflow-y-scroll">
      <div className="flex px-2 items-center justify-between text-[#636AE8FF] font-inter text-xl text-bold">
        <div
          onClick={() => {
            router.push("/dashboard/rooms");
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
        }} className="flex justify-left items-center h-[86vh] mt-[40vh] ml-4 ">
      <Form
        {...formItemLayout}
        form={form}
        layout="vertical"
        requiredMark >
        <Form.Item label="ClassRoom Name" required>
          <Input placeholder="Name" className="font-inter font-normal"
          />
        </Form.Item>
        <Form.Item label="ClassRoom Capacity" required>
        <InputNumber min={0} placeholder="Capacity" className='w-full font-inter font-normal' />
        </Form.Item>
        <Form.Item label="Is it a Lab?" required>
              <Radio.Group >
            <Radio value={1} className='mr-10'>Yes</Radio>
            <Radio value={2}  className='ml-10 color-[#636AE8FF]'>No</Radio>
              </Radio.Group>
        </Form.Item>
        <Form.Item
        label="Department"
        name="Select">
        <Select className='font-inter font-normal' />
      </Form.Item>
      <label>
          <span>Schedule</span>
          <Tooltip title="Tooltip with customize icon" icon={<InfoCircleOutlined />}>
            <InfoCircleOutlined className="ml-2 text-[#636AE8FF]" />
          </Tooltip>
      </label>
      <div className="flex justify-left" >
      <Timetable />
      </div>
      <div className="flex justify-end w-[55vm]">
        <Form.Item>
          <Button className="border-[#636AE8FF] text-[#636AE8FF] mr-[30px] w-[75px] h-[32px]">Clear</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={success} className="bg-[#636AE8FF] text-[#FFFFFF] w-[75px] h-[32px]">Submit</Button>
        </Form.Item>
      </div>
      </Form>
      </motion.div>
    </div>
  );
};

export default AddRoomForm;
