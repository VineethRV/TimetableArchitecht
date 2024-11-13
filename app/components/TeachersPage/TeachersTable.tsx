"use client";
import React from "react";
import { Avatar, Button, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { MdDelete, MdEdit } from "react-icons/md";

interface TeacherType {
  key: React.Key;
  name: string;
  intials: string;
  email: string;
  department: string;
  designation: string;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const data: TeacherType[] = [
  {
    key: "1",
    name: "Alice Johnson",
    intials: "AJ",
    email: "alice.johnson@example.com",
    department: "Mathematics",
    designation: "Senior Lecturer",
  },
  {
    key: "2",
    name: "Bob Smith",
    intials: "BS",
    email: "bob.smith@example.com",
    department: "Science",
    designation: "Assistant Professor",
  },
  {
    key: "3",
    name: "Carla Evans",
    intials: "CE",
    email: "carla.evans@example.com",
    department: "English",
    designation: "Professor",
  },
  {
    key: "4",
    name: "David Brown",
    intials: "DB",
    email: "david.brown@example.com",
    department: "History",
    designation: "Lecturer",
  },
  {
    key: "5",
    name: "Emily White",
    intials: "EW",
    email: "emily.white@example.com",
    department: "Physical Education",
    designation: "Lecturer",
  },
  {
    key: "6",
    name: "Frank Wilson",
    intials: "FW",
    email: "frank.wilson@example.com",
    department: "Chemistry",
    designation: "Associate Professor",
  },
  {
    key: "7",
    name: "Grace Hall",
    intials: "GH",
    email: "grace.hall@example.com",
    department: "Biology",
    designation: "Senior Lecturer",
  },
  {
    key: "8",
    name: "Henry Young",
    intials: "HY",
    email: "henry.young@example.com",
    department: "Physics",
    designation: "Assistant Professor",
  },
  {
    key: "9",
    name: "Irene Clark",
    intials: "IC",
    email: "irene.clark@example.com",
    department: "Mathematics",
    designation: "Professor",
  },
  {
    key: "10",
    name: "Jack Lewis",
    intials: "JL",
    email: "jack.lewis@example.com",
    department: "English",
    designation: "Lecturer",
  },
  {
    key: "11",
    name: "Karen Foster",
    intials: "KF",
    email: "karen.foster@example.com",
    department: "Science",
    designation: "Senior Lecturer",
  },
  {
    key: "12",
    name: "Larry Scott",
    intials: "LS",
    email: "larry.scott@example.com",
    department: "Mathematics",
    designation: "Associate Professor",
  },
  {
    key: "13",
    name: "Megan Robinson",
    intials: "MR",
    email: "megan.robinson@example.com",
    department: "Art",
    designation: "Assistant Professor",
  },
  {
    key: "14",
    name: "Nathan Reed",
    intials: "NR",
    email: "nathan.reed@example.com",
    department: "History",
    designation: "Lecturer",
  },
  {
    key: "15",
    name: "Olivia Turner",
    intials: "OT",
    email: "olivia.turner@example.com",
    department: "English",
    designation: "Senior Lecturer",
  },
  {
    key: "16",
    name: "Peter Lee",
    intials: "PL",
    email: "peter.lee@example.com",
    department: "Mathematics",
    designation: "Lecturer",
  },
  {
    key: "17",
    name: "Quinn Martinez",
    intials: "QM",
    email: "quinn.martinez@example.com",
    department: "Science",
    designation: "Associate Professor",
  },
  {
    key: "18",
    name: "Rachel Allen",
    intials: "RA",
    email: "rachel.allen@example.com",
    department: "Biology",
    designation: "Lecturer",
  },
  {
    key: "19",
    name: "Samuel King",
    intials: "SK",
    email: "samuel.king@example.com",
    department: "History",
    designation: "Professor",
  },
  {
    key: "20",
    name: "Tina Hill",
    intials: "TH",
    email: "tina.hill@example.com",
    department: "Physical Education",
    designation: "Assistant Professor",
  },
  {
    key: "21",
    name: "Uma Perez",
    intials: "UP",
    email: "uma.perez@example.com",
    department: "Mathematics",
    designation: "Lecturer",
  },
  {
    key: "22",
    name: "Victor Nelson",
    intials: "VN",
    email: "victor.nelson@example.com",
    department: "Science",
    designation: "Senior Lecturer",
  },
  {
    key: "23",
    name: "Wendy Barnes",
    intials: "WB",
    email: "wendy.barnes@example.com",
    department: "English",
    designation: "Lecturer",
  },
  {
    key: "24",
    name: "Xavier Sanchez",
    intials: "XS",
    email: "xavier.sanchez@example.com",
    department: "Chemistry",
    designation: "Associate Professor",
  },
  {
    key: "25",
    name: "Yara Flores",
    intials: "YF",
    email: "yara.flores@example.com",
    department: "History",
    designation: "Lecturer",
  },
  {
    key: "26",
    name: "Zane Morgan",
    intials: "ZM",
    email: "zane.morgan@example.com",
    department: "Physics",
    designation: "Assistant Professor",
  },
  {
    key: "27",
    name: "Alyssa Porter",
    intials: "AP",
    email: "alyssa.porter@example.com",
    department: "Art",
    designation: "Senior Lecturer",
  },
  {
    key: "28",
    name: "Brian Chavez",
    intials: "BC",
    email: "brian.chavez@example.com",
    department: "Biology",
    designation: "Lecturer",
  },
  {
    key: "29",
    name: "Christine Green",
    intials: "CG",
    email: "christine.green@example.com",
    department: "English",
    designation: "Associate Professor",
  },
  {
    key: "30",
    name: "Danielle Howard",
    intials: "DH",
    email: "danielle.howard@example.com",
    department: "Mathematics",
    designation: "Lecturer",
  },
  {
    key: "31",
    name: "Edward Brooks",
    intials: "EB",
    email: "edward.brooks@example.com",
    department: "Physical Education",
    designation: "Senior Lecturer",
  },
  {
    key: "32",
    name: "Fiona Young",
    intials: "FY",
    email: "fiona.young@example.com",
    department: "Chemistry",
    designation: "Assistant Professor",
  },
  {
    key: "33",
    name: "George Cooper",
    intials: "GC",
    email: "george.cooper@example.com",
    department: "Science",
    designation: "Professor",
  },
  {
    key: "34",
    name: "Hannah Ward",
    intials: "HW",
    email: "hannah.ward@example.com",
    department: "History",
    designation: "Lecturer",
  },
  {
    key: "35",
    name: "Isaac Bell",
    intials: "IB",
    email: "isaac.bell@example.com",
    department: "Physics",
    designation: "Senior Lecturer",
  },
  {
    key: "36",
    name: "Julia Adams",
    intials: "JA",
    email: "julia.adams@example.com",
    department: "Art",
    designation: "Assistant Professor",
  },
  {
    key: "37",
    name: "Kyle Diaz",
    intials: "KD",
    email: "kyle.diaz@example.com",
    department: "English",
    designation: "Lecturer",
  },
  {
    key: "38",
    name: "Lily Carter",
    intials: "LC",
    email: "lily.carter@example.com",
    department: "Biology",
    designation: "Professor",
  },
  {
    key: "39",
    name: "Michael Sanchez",
    intials: "MS",
    email: "michael.sanchez@example.com",
    department: "Science",
    designation: "Senior Lecturer",
  },
  {
    key: "40",
    name: "Nina Ramirez",
    intials: "NR",
    email: "nina.ramirez@example.com",
    department: "Mathematics",
    designation: "Assistant Professor",
  },
];

const colorCombos: Record<string, string>[] = [
  { textColor: "#FFFFFF", backgroundColor: "#000000" },
  { textColor: "#333333", backgroundColor: "#FFFBCC" },
  { textColor: "#1D3557", backgroundColor: "#A8DADC" },
  { textColor: "#F2F2F2", backgroundColor: "#00796B" },
  { textColor: "#FFFFFF", backgroundColor: "#283593" },
  { textColor: "#FFFFFF", backgroundColor: "#2C3E50" },
  { textColor: "#000000", backgroundColor: "#F2F2F2" },
  { textColor: "#F2F2F2", backgroundColor: "#424242" },
  { textColor: "#000000", backgroundColor: "#F4E04D" },
  { textColor: "#2F4858", backgroundColor: "#F8B400" },
  { textColor: "#373737", backgroundColor: "#F2F2F2" },
  { textColor: "#FFFFFF", backgroundColor: "#37474F" },
  { textColor: "#212121", backgroundColor: "#EDE7F6" },
  { textColor: "#000000", backgroundColor: "#C6FF00" },
  { textColor: "#E65100", backgroundColor: "#FFEB3B" },
  { textColor: "#FFFFFF", backgroundColor: "#FF7043" },
  { textColor: "#1A237E", backgroundColor: "#E3F2FD" },
  { textColor: "#4E342E", backgroundColor: "#FFEBEE" },
  { textColor: "#FFFFFF", backgroundColor: "#4E342E" },
  { textColor: "#3E2723", backgroundColor: "#FFCCBC" },
  { textColor: "#212121", backgroundColor: "#E3F2FD" },
  { textColor: "#FFFFFF", backgroundColor: "#616161" },
  { textColor: "#D32F2F", backgroundColor: "#FFCDD2" },
  { textColor: "#1976D2", backgroundColor: "#BBDEFB" },
  { textColor: "#880E4F", backgroundColor: "#FCE4EC" },
  { textColor: "#F57C00", backgroundColor: "#FFF3E0" },
  { textColor: "#512DA8", backgroundColor: "#D1C4E9" },
  { textColor: "#00796B", backgroundColor: "#B2DFDB" },
  { textColor: "#37474F", backgroundColor: "#E0E0E0" },
  { textColor: "#757575", backgroundColor: "#B0BEC5" },
  { textColor: "#0D47A1", backgroundColor: "#E3F2FD" },
  { textColor: "#FF5722", backgroundColor: "#FFF3E0" },
  { textColor: "#33691E", backgroundColor: "#DCEDC8" },
  { textColor: "#BF360C", backgroundColor: "#FFCCBC" },
  { textColor: "#006064", backgroundColor: "#E0F7FA" },
  { textColor: "#5D4037", backgroundColor: "#D7CCC8" },
];

const deptColors: Record<string, string> = {};
let cnt = 0;
data.forEach((d: TeacherType) => {
  if (!deptColors[d.department]) {
    deptColors[d.department] = colorCombos[cnt].backgroundColor;
    cnt++;
  }
});

const columns: TableColumnsType<TeacherType> = [
  {
    title: "Avatar",
    dataIndex: "name",
    render: (text: string) => {
      return (
        <Avatar
          className="text-xl"
          style={{ backgroundColor: getRandomColor(), verticalAlign: "middle" }}
          size="large"
        >
          {text.slice(0, 1)}
        </Avatar>
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Initials",
    dataIndex: "intials",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Department",
    dataIndex: "department",
    render: (dept: string) => {
      return (
        <h1
          style={{
            backgroundColor: deptColors[dept],
            color: colorCombos.find(
              (combo) => combo.backgroundColor === deptColors[dept]
            )?.textColor,
          }}
          className="text-xs opacity-85 font-semibold w-fit px-2.5 py-0.5 rounded-xl"
        >
          {dept}
        </h1>
      );
    },
  },
  {
    title: "Designation",
    dataIndex: "designation",
  },
  {
    title: "",
    render: () => {
      return (
        <Tooltip title="Edit">
          <Button type="primary" shape="circle" icon={<MdEdit />} />
        </Tooltip>
      );
    },
  },
  {
    title: "",
    render: () => {
      return (
        <Tooltip title="Delete">
          <Button
            className="bg-red-400 "
            type="primary"
            shape="circle"
            icon={<MdDelete />}
          />
        </Tooltip>
      );
    },
  },
];

const rowSelection: TableProps<TeacherType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: TeacherType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: TeacherType) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const TeachersTable: React.FC = () => {
  return (
    <div>
      <Table<TeacherType>
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default TeachersTable;
