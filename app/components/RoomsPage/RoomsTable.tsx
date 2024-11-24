"use client";
import React from "react";
import { Button, Switch, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { MdDelete, MdEdit } from "react-icons/md";
import { Room } from "@/app/types/main";

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
];
const deptColors: Record<string, string> = {};
let cnt = 0;

const rowSelection: TableProps<Room>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: Room[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: Room) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const RoomsTable = ({ roomsData }: { roomsData: Room[] }) => {

  const deptColors: Record<string, string> = {};
  let cnt = 0;
  roomsData.forEach((d: Room) => {
    if (!deptColors[d.department as string]) {
      deptColors[d.department as string] = colorCombos[cnt].backgroundColor;
      cnt++;
    }
  });

  const columns: TableColumnsType<Room> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Lab",
      dataIndex: "lab",
      render: (data) => {
        return <Switch value={data} disabled />;
      },
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

  roomsData = roomsData.map((room)=>{
    return {
      ...room,
      key: room.name
    }
  })

  return (
    <div>
      <Table<Room>
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={roomsData}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default RoomsTable;
