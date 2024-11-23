"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, Tooltip, Upload } from "antd";
import Timetable from "@/app/components/timetable";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CiImport } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { updateTeachers, peekTeacher } from "@/lib/actions/teacher";
import { statusCodes } from "@/app/types/statusCodes";
import { toast } from "sonner";
import { DEPARTMENTS_OPTIONS } from "@/info";
import { Teacher } from "@prisma/client";


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

function convertTableToString(timetable: string[][]): string {
  return timetable.map(row => row.join(",")).join(";");
}

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const timeslots = [
  "9:00-10:00",
  "10:00-11:00",
  "11:30-12:30",
  "12:30-1:30",
  "2:30-3:30",
  "3:30-4:30",
];

export default function EditTeacherpage({
  params,
}: {
  params: {
    name: string;
    department: string;
  };
}) {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading,setLoading]=useState(false);

  const clearFields = () => {
    form.setFieldValue("name", "");
    form.setFieldValue("initials", "");
    form.setFieldValue("email", "");
    form.setFieldValue("department", "");
    setButtonStatus(weekdays.map(() => timeslots.map(() => "Free")));
  };

  useEffect(() => {
    if (params.name && params.department) {
      fetchTeacherDetails(decodeURIComponent(params.name), decodeURIComponent(params.department));
    }
  }, [params.name, params.department]);

  const rewriteUrl = (newName:string,newDepartment:string) => {
    router.push(`/dashboard/teacher/edit/${encodeURIComponent(newName)}/${encodeURIComponent(newDepartment)}`);
  };


  //fetching the details of the teacher
  const fetchTeacherDetails = async (
    name: string,
    department: string | null
  ) => {
    const token = localStorage.getItem("token") || "";
    setLoading(true);
    const res = await peekTeacher(token, name, department);
    if (res.status === statusCodes.OK && res.teacher) {
      const timetableString = res.teacher.timetable
      ? res.teacher.timetable.split(";").map(row => row.split(","))
      : Array(6).fill(Array(6).fill("Free"));
      console.log(typeof(res.teacher.timetable))
       setButtonStatus(timetableString);

      form.setFieldsValue({
        name: res.teacher.name,
        initials: res.teacher.initials,
        email: res.teacher.email,
        department: res.teacher.department,
      });
      setLoading(false);
    } else {
      toast.error("Failed to fetch teacher details!");
      setLoading(false);
    }
  };
  const [buttonStatus, setButtonStatus] = useState(
    weekdays.map(() => timeslots.map(() => "Free"))
  );

  //Submiting after updating the changes in the form
  const handleSubmit = async () => {
    const token = localStorage.getItem("token") || "";
    const name = form.getFieldValue("name");
    const initials = form.getFieldValue("initials");
    const email = form.getFieldValue("email");
    const department = form.getFieldValue("department");
    console.log(buttonStatus)
    const teacherData: Teacher = {
      name,
      initials,
      email,
      department,
      alternateDepartments: null,
      timetable: convertTableToString(buttonStatus),
      labtable: null,
      id: 0,
      organisation: null,
    };

    const res = updateTeachers(token,decodeURIComponent(params.name),decodeURIComponent(params.department), teacherData).then((res) => {
      const statusCode = res.status;

      switch (statusCode) {
        case statusCodes.OK:
          clearFields();
          toast.success("Teacher updated successfully!");
          rewriteUrl(name,department)
          break;
        case statusCodes.FORBIDDEN:
          clearFields();
          toast.error("Cannot delete the teacher !!");
          break;
        case statusCodes.INTERNAL_SERVER_ERROR:
          toast.error("Internal server error!");
          break;
      }
    });
    toast.promise(res, {
      loading: "Updating teacher !!",
    });
  };

  if (loading) {
    toast.loading("Fetching teacher data !!");
  } else {
    toast.dismiss();
  }
  return (
    <div className="text-xl font-bold text-[#171A1F] pl-8 py-6 h-screen overflow-y-scroll">
      <div className="flex px-2 items-center justify-between text-[#636AE8FF] font-inter text-xl text-bold">
        <div
          onClick={() => {
            router.push("/dashboard/teacher");
          } }
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
          <Form.Item name="name" label="Teacher Name" required>
            <Input placeholder="Name" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item name="initials" label="Initials" required>
            <Input placeholder="Initials" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item name="email" label="Email Id">
            <Input placeholder="Email Id" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item name="department" label="Department">
            <Select
              showSearch
              placeholder="Select a department"
              optionFilterProp="label"
              options={DEPARTMENTS_OPTIONS}
              className="font-normal" />
          </Form.Item>

          <label>
            <div className="flex items-center">
              <span>Schedule</span>
              <Tooltip title="Click on the timeslots where to the teacher  busy to set them to busy">
                <IoIosInformationCircleOutline className="ml-2 w-4 h-4 text-[#636AE8FF]" />
              </Tooltip>
            </div>
          </label>
          <Timetable
            buttonStatus={buttonStatus}
            setButtonStatus={setButtonStatus} />
          <div className="flex justify-end">
            <div className="flex space-x-4">
              <Form.Item>
                <Button
                  onClick={clearFields}
                  className="border-[#636AE8FF] text-[#636AE8FF]"
                >
                  Clear
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={handleSubmit}
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
}

