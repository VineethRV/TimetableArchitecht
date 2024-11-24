"use client";
import React, { useState,useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Tooltip,
  Upload,
  Radio,
} from "antd";
import Timetable from "@/app/components/timetable";
import { motion } from "framer-motion";
import { CiImport } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { DEPARTMENTS_OPTIONS } from "@/info";
import { peekRoom, updateRoom } from "@/lib/actions/room";
import { toast } from "sonner";
import { statusCodes } from "@/app/types/statusCodes";
import { Room } from "@prisma/client";

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

export default function EditRoomForm({
    params,
  }: {
    params: {
      name: string;
      department: string;
    };
  }){
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading,setLoading]=useState(false);

  const [buttonStatus, setButtonStatus] = useState(
    weekdays.map(() => timeslots.map(() => "Free"))
  );

  function clearFields() {
    form.setFieldValue('className', "");
    form.setFieldValue('lab', "");
    form.setFieldValue('department', "");
    setButtonStatus(weekdays.map(() => timeslots.map(() => "Free")));
  }

  useEffect(() => {
    if (params.name && params.department) {
      fetchRoomDetails(decodeURIComponent(params.name), decodeURIComponent(params.department));
    }
  }, [params.name, params.department]);

  const rewriteUrl = (newName:string,newDepartment:string) => {
    router.push(`/dashboard/rooms/edit/${encodeURIComponent(newName)}/${encodeURIComponent(newDepartment)}`);
  };

  //fetching details of room
  const fetchRoomDetails = async (
    name: string,
    department: string | null
  ) => {
    const token = localStorage.getItem("token") || "";
    setLoading(true);
    const res = await peekRoom(token, name, department);
    if (res.status === statusCodes.OK && res.room) {
      const timetableString = res.room.timetable
      ? res.room.timetable.split(";").map(row => row.split(","))
      : Array(6).fill(Array(6).fill("Free"));
      console.log(typeof(res.room.timetable))
       setButtonStatus(timetableString);
      form.setFieldsValue({
        className: res.room.name,
        lab: res.room.lab?1:2,
        department: res.room.department,
      });
      setLoading(false);
    } else {
      toast.error("Failed to fetch room details!");
      setLoading(false);
    }
  };

   //Submiting after updating the changes in the form
   const handleSubmit = async () => {
    const token = localStorage.getItem("token") || "";
    const name = form.getFieldValue("className");
    const lab = form.getFieldValue("lab")===1?true:false;;
    const department = form.getFieldValue("department");
    const RoomData: Room = {
        name,
        lab,
        department,
        timetable: convertTableToString(buttonStatus),
        id: 0,
        organisation: null,
      };

    const res = updateRoom(token,decodeURIComponent(params.name),decodeURIComponent(params.department), RoomData).then((res) => {
      const statusCode = res.status;

      switch (statusCode) {
        case statusCodes.OK:
          toast.success("Room updated successfully!");
          rewriteUrl(name,department)
          break;
        case statusCodes.NOT_FOUND:
          toast.error("Room Not Found !!");
          break;
          case statusCodes.FORBIDDEN:
          toast.error("Cannot Update Room !!");
          break;
        case statusCodes.INTERNAL_SERVER_ERROR:
          toast.error("Internal server error!");
          break;
      }
    });
    toast.promise(res, {
      loading: "Updating Room !!",
    });
  };

if (loading) {
    toast.loading("Fetching Room data !!");
  } else {
    toast.dismiss();
  }

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
        className="flex justify-left items-center mt-12 ml-4"
      >
        <Form {...formItemLayout} form={form} layout="vertical" requiredMark>
          <Form.Item name="className" label="Classroom Name" required>
            <Input placeholder="Name" className="font-inter font-normal" />
          </Form.Item>
          <Form.Item name="lab" label="Is it a Lab?" required>
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={2} className="ml-4 color-[#636AE8FF]">
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Department" name="department">
            <Select options={DEPARTMENTS_OPTIONS} className="font-inter font-normal" />
          </Form.Item>
          <label className="flex items-center">
            <span>Schedule</span>
            <Tooltip title="Click on the timeslots where to the room is busy to set them to busy">
              <IoIosInformationCircleOutline className="ml-2 text-[#636AE8FF]" />
            </Tooltip>
          </label>
          <div className="flex justify-left">
            <Timetable
              buttonStatus={buttonStatus}
              setButtonStatus={setButtonStatus}
            />
          </div>
          <div className="flex space-x-4 justify-end w-[55vm]">
            <Form.Item>
              <Button onClick={clearFields} className="border-[#636AE8FF] text-[#636AE8FF] w-[75px] h-[32px]">
                Clear
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={handleSubmit}
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

