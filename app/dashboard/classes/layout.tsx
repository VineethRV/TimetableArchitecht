"use client";

import React, { useState } from "react";
import { Layout, Divider } from "antd";
const { Sider } = Layout;
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChalkboardTeacher,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const [selected1, setSelected1] = useState("Core Courses");
  const [selected2, setSelected2] = useState("Add a Course");

  const menuItems1 = [
    { label: "Electives", icon: faChalkboardTeacher },
    { label: "Labs", icon: faChalkboardTeacher },
    { label: "Core Courses", icon: faClockRotateLeft },
  ];

  const menuItems2 = [
    { label: "Add a Course", icon: faCalendar },
    { label: "Modify Course", icon: faCalendar },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className="sidepanel">
        <div className="Sub-panel" style={{ height: "7vh" }}>
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            style={{ width: "30px", height: "40px" }}
          />
          <span style={{ paddingLeft: "10px", fontSize: "18px" }}>Courses</span>
        </div>
        <Divider />
        <div
          style={{
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {menuItems1.map((item) => (
            <div
              className="Sub-panel"
              key={item.label}
              onClick={() => setSelected1(item.label)}
              style={{
                cursor: "pointer",
                color: selected1 === item.label ? "#636AE8FF" : " #565E6CFF",
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ width: "20px", height: "30px" }}
              />
              <span
                style={{ paddingLeft: "10px", fontSize: "14px", font: "Inter" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {menuItems2.map((item) => (
            <div
              className="Sub-panel"
              key={item.label}
              onClick={() => setSelected2(item.label)}
              style={{
                cursor: "pointer",
                color: selected2 === item.label ? "#636AE8FF" : " #565E6CFF",
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ width: "20px", height: "30px" }}
              />
              <span
                style={{ paddingLeft: "10px", fontSize: "14px", font: "Inter" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
