"use client";

import React, { useEffect, useState } from "react";
import { Layout, Divider, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUserPen,
  faUserPlus,
  faChalkboardTeacher,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const { Header, Content, Sider } = Layout;

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Router = useRouter();
  const [selected, setSelected] = useState("Modify Attributes");

  useEffect(() => {
    const storedLabel = localStorage.getItem("selectedLabel");
    const storedUrl = localStorage.getItem("selectedUrl");
    if (storedLabel && storedUrl) {
      setSelected(storedLabel);
      Router.push(`/dashboard/teacher${storedUrl}`);
    }
  }, []);

  const handleClick = (label: string, url: string) => {
    setSelected(label);
    localStorage.setItem("selectedLabel", label);
    localStorage.setItem("selectedUrl", url);
    Router.push(`/dashboard/teacher${url}`);
  };

  return (
    <Layout className='min-h-screen'>
      <Sider className=" w-[17vw] h-screen bg-white ">
        <div className="flex justify-left text-black-bold items-center pt-[20px] pl-[20px] space-x-2 h-[7vh] ">
                      <FontAwesomeIcon icon={faChalkboardTeacher} className='w-[30px] h-[40px]' />
                      <span className=' text-[18px] font-semibold text-[#171A1FFF]' style={{fontFamily:'Archivo'}}>Teachers</span> 
                  </div>
        <Divider/>
        <div className="flex flex-col items-left justify-center h-[25vh] space-y-2 font-medium text-[#565E6C] pl-4" style={{ fontFamily: "Inter" }}>
          <div
            onClick={() => handleClick("Add a Teacher", "/add")}
            className={`relative space-x-2 p-2  ${
              selected === "Add a Teacher" ? "item-selected" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5" />
            <span>Add a Teacher</span>
          </div>

          <div
            onClick={() => handleClick("Modify Attributes", "")}
            className={`relative space-x-2 p-2  ${
              selected === "Modify Attributes" ? "item-selected" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUserPen} className="w-5 h-5" />
            <span>Modify Attributes</span>
          </div>
          </div>
            <Divider/>
            <div className="flex flex-col items-left justify-center h-[25vh] space-y-2 font-medium text-[#565E6C] pl-4" style={{ fontFamily: "Inter" }}>
            <div
                onClick={() => handleClick("Rank Timewise", "/")}
                className={`relative space-x-2 p-2 ${
                  selected === "Rank Timewise" ? "item-selected" : ""
                }`}
              >
                <FontAwesomeIcon icon={faClockRotateLeft} className="w-5 h-5" />
                <span>Rank Timewise</span>
              </div>

              <div
                onClick={() => handleClick("Timeslot Dependent", "/")}
                className={`relative space-x-2 p-2  ${
                  selected === "Timeslot Dependent" ? "item-selected" : ""
                }`}
              >
                <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />
                <span>Timeslot Dependent</span>
              </div>
          </div>
        <div className="flex justify-center">
        <Button
          onClick={() => Router.push(`/teacher/Consolidated`)}
          className="mt-2 bg-[#636AE8FF] text-white"
        >
          Generate Consolidated
        </Button>
        </div>
      </Sider>

      <Layout>
        <Header
          className="fixed h-[10vh] bg-white text-[#636AE8FF] text-2xl leading-[48px] font-extrabold pt-2"
          style={{ fontFamily: "Archivo", width: "calc(100% - 20vw)" }}
        >
          Teachers
        </Header>
        <Content
          className="fixed top-[10vh] overflow-y-auto h-[90vh] p-4 bg-white"
          style={{ width: "calc(100% - 20vw)" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
