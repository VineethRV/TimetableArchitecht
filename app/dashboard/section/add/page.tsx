"use client";
import React from "react";
import { CiImport } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Button, message,Form,Input,Select,Tooltip,Upload,InputNumber} from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { semesterOptions } from "@/app/components/semester/semester";
import RoomOptions from "@/app/components/general/roomoption";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const AddCoursepage: React.FC = () => {
  const [form] = Form.useForm();
  const success = () => {
    message.success("Section Added successfully!", 3);
  };
  const router = useRouter();

  const tagRender = (props: {
    label: React.ReactNode;
    onClose: () => void;
  }) => {
    const { label, onClose } = props;

    return (
      <div className="flex items-center bg-[#F2F2FDFF] text-[#636AE8FF] rounded-full px-3 py-1 text-xs m-1 font-semibold">
        {label}
        {
          <button
            onClick={onClose}
            className="ml-2 text-red-500 cursor-pointer hover:text-red-700"
          >
            ×
          </button>
        }
      </div>
    );
  };

  return (
    <div className="text-xl font-bold text-[#171A1F] pl-8 py-6 h-screen overflow-y-scroll">
      <div className="flex px-2 items-center justify-between text-[#636AE8FF] text-xl text-bold">
        <div
          onClick={() => {
            router.push("/dashboard/courses/core-courses");
          }}
          className="flex text-base w-fit cursor-pointer space-x-2"
        >
          <h1>&#8592;</h1>
          <h1>Back</h1>
        </div>
        <Upload>
          <Button
            icon={<CiImport />}
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
          <Form.Item label="Class Name" required>
            <Input placeholder="Name" className="w-full font-normal" />
          </Form.Item>
          <Form.Item
            label={
              <span className="inline-flex items-center">
                Class Batch
                <Tooltip title="Year of Admission">
                  <IoIosInformationCircleOutline className="ml-2 text-[#636AE8FF]" />
                </Tooltip>
              </span>
            }
            required
          >
            <InputNumber
              min={2020}
              placeholder="Batch"
              className="w-full font-normal"
            />
          </Form.Item>
          <Form.Item label="Semester" name="selectSem" required>
            <Select
              placeholder="Select a semester"
              options={semesterOptions}
              className="font-normal"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="inline-flex items-center">
                Elective and Common Time Subjects
                <Tooltip title="Select one or more Elective Clusters and common time subjects applicable for the class">
                  <IoIosInformationCircleOutline className="ml-2 text-[#636AE8FF]" />
                </Tooltip>
              </span>
            }
          >
            <Select
              mode="multiple"
              placeholder="Elective Clusters"
              className="font-normal"
              tagRender={tagRender}
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="inline-flex items-center">
                Lab Courses
                <Tooltip title="Select one or more Lab Clusters applicable for the class">
                  <IoIosInformationCircleOutline className="ml-2 text-[#636AE8FF]" />
                </Tooltip>
              </span>
            }
          >
            <Select
              mode="multiple"
              placeholder="Lab Courses"
              className="font-normal"
              tagRender={tagRender}
            />
          </Form.Item>

          <Form.Item required
            label={
              <span className="inline-flex items-center">
                Default Room
                <Tooltip title="The default room which must be assigned to the section">
                  <IoIosInformationCircleOutline className="ml-2 text-[#636AE8FF]" />
                </Tooltip>
              </span>
            }
          >
            <RoomOptions multiple={false}/>
          </Form.Item>

          <Form.Item required label="Department from which room should be selected if default room is not available">
            <Select  mode="multiple" placeholder='Department' className="font-normal"/>
          </Form.Item>


          <div className="flex justify-end">
            <div className="flex space-x-4">
              <Form.Item>
                <Button className="border-[#636AE8FF] text-[#636AE8FF]">
                  Clear
                </Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={success} className="bg-primary text-[#FFFFFF]">
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

export default AddCoursepage;
