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
