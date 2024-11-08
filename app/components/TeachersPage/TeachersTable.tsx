"use client";
import React from "react";
import { Avatar, Button, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

interface TeacherType {
  key: React.Key;
  name: string;
  intials: string;
  email: string;
  department: string;
}

const columns: TableColumnsType<TeacherType> = [
  {
    title: "Avatar",
    dataIndex: "name",
    render: (text: string) => {
      const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

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
  },
  {
    title: "",
    render: () => {
      return (
        <Tooltip title="Edit">
          <Button type="primary" shape="circle" icon={<EditFilled />} />
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
            icon={<DeleteFilled />}
          />
        </Tooltip>
      );
    },
  },
];

const data: TeacherType[] = [
  {
    key: "1",
    name: "Alice Johnson",
    intials: "AJ",
    email: "alice.johnson@example.com",
    department: "Mathematics",
  },
  {
    key: "2",
    name: "Bob Smith",
    intials: "BS",
    email: "bob.smith@example.com",
    department: "Science",
  },
  {
    key: "3",
    name: "Carla Evans",
    intials: "CE",
    email: "carla.evans@example.com",
    department: "English",
  },
  {
    key: "4",
    name: "David Brown",
    intials: "DB",
    email: "david.brown@example.com",
    department: "History",
  },
  {
    key: "5",
    name: "Emily White",
    intials: "EW",
    email: "emily.white@example.com",
    department: "Physical Education",
  },
  {
    key: "6",
    name: "Frank Wilson",
    intials: "FW",
    email: "frank.wilson@example.com",
    department: "Chemistry",
  },
  {
    key: "7",
    name: "Grace Hall",
    intials: "GH",
    email: "grace.hall@example.com",
    department: "Biology",
  },
  {
    key: "8",
    name: "Henry Young",
    intials: "HY",
    email: "henry.young@example.com",
    department: "Physics",
  },
  {
    key: "9",
    name: "Irene Clark",
    intials: "IC",
    email: "irene.clark@example.com",
    department: "Mathematics",
  },
  {
    key: "10",
    name: "Jack Lewis",
    intials: "JL",
    email: "jack.lewis@example.com",
    department: "English",
  },
  {
    key: "11",
    name: "Karen Foster",
    intials: "KF",
    email: "karen.foster@example.com",
    department: "Science",
  },
  {
    key: "12",
    name: "Larry Scott",
    intials: "LS",
    email: "larry.scott@example.com",
    department: "Mathematics",
  },
  {
    key: "13",
    name: "Megan Robinson",
    intials: "MR",
    email: "megan.robinson@example.com",
    department: "Art",
  },
  {
    key: "14",
    name: "Nathan Reed",
    intials: "NR",
    email: "nathan.reed@example.com",
    department: "History",
  },
  {
    key: "15",
    name: "Olivia Turner",
    intials: "OT",
    email: "olivia.turner@example.com",
    department: "English",
  },
  {
    key: "16",
    name: "Peter Lee",
    intials: "PL",
    email: "peter.lee@example.com",
    department: "Mathematics",
  },
  {
    key: "17",
    name: "Quinn Martinez",
    intials: "QM",
    email: "quinn.martinez@example.com",
    department: "Science",
  },
  {
    key: "18",
    name: "Rachel Allen",
    intials: "RA",
    email: "rachel.allen@example.com",
    department: "Biology",
  },
  {
    key: "19",
    name: "Samuel King",
    intials: "SK",
    email: "samuel.king@example.com",
    department: "History",
  },
  {
    key: "20",
    name: "Tina Hill",
    intials: "TH",
    email: "tina.hill@example.com",
    department: "Physical Education",
  },
  {
    key: "21",
    name: "Uma Perez",
    intials: "UP",
    email: "uma.perez@example.com",
    department: "Mathematics",
  },
  {
    key: "22",
    name: "Victor Nelson",
    intials: "VN",
    email: "victor.nelson@example.com",
    department: "Science",
  },
  {
    key: "23",
    name: "Wendy Barnes",
    intials: "WB",
    email: "wendy.barnes@example.com",
    department: "English",
  },
  {
    key: "24",
    name: "Xavier Sanchez",
    intials: "XS",
    email: "xavier.sanchez@example.com",
    department: "Chemistry",
  },
  {
    key: "25",
    name: "Yara Flores",
    intials: "YF",
    email: "yara.flores@example.com",
    department: "History",
  },
  {
    key: "26",
    name: "Zane Morgan",
    intials: "ZM",
    email: "zane.morgan@example.com",
    department: "Physics",
  },
  {
    key: "27",
    name: "Alyssa Porter",
    intials: "AP",
    email: "alyssa.porter@example.com",
    department: "Art",
  },
  {
    key: "28",
    name: "Brian Chavez",
    intials: "BC",
    email: "brian.chavez@example.com",
    department: "Biology",
  },
  {
    key: "29",
    name: "Christine Green",
    intials: "CG",
    email: "christine.green@example.com",
    department: "English",
  },
  {
    key: "30",
    name: "Danielle Howard",
    intials: "DH",
    email: "danielle.howard@example.com",
    department: "Mathematics",
  },
  {
    key: "31",
    name: "Edward Brooks",
    intials: "EB",
    email: "edward.brooks@example.com",
    department: "Physical Education",
  },
  {
    key: "32",
    name: "Fiona Young",
    intials: "FY",
    email: "fiona.young@example.com",
    department: "Chemistry",
  },
  {
    key: "33",
    name: "George Cooper",
    intials: "GC",
    email: "george.cooper@example.com",
    department: "Science",
  },
  {
    key: "34",
    name: "Hannah Ward",
    intials: "HW",
    email: "hannah.ward@example.com",
    department: "History",
  },
  {
    key: "35",
    name: "Isaac Bell",
    intials: "IB",
    email: "isaac.bell@example.com",
    department: "Physics",
  },
  {
    key: "36",
    name: "Julia Adams",
    intials: "JA",
    email: "julia.adams@example.com",
    department: "Art",
  },
  {
    key: "37",
    name: "Kyle Diaz",
    intials: "KD",
    email: "kyle.diaz@example.com",
    department: "English",
  },
  {
    key: "38",
    name: "Lily Carter",
    intials: "LC",
    email: "lily.carter@example.com",
    department: "Biology",
  },
  {
    key: "39",
    name: "Michael Sanchez",
    intials: "MS",
    email: "michael.sanchez@example.com",
    department: "Science",
  },
  {
    key: "40",
    name: "Nina Ramirez",
    intials: "NR",
    email: "nina.ramirez@example.com",
    department: "Mathematics",
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
    disabled: record.name === "Disabled User", // Column configuration not to be checked
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
