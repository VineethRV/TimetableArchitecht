import React from "react";
import { Button, Progress } from "antd";
import Illustration from "../components/OnBoardingProcess/Illustration";
import LogoHeader from "../components/OnBoardingProcess/LogoHeader";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Form1 from "../components/OnBoardingProcess/Forms/Form1";
import Form2 from "../components/OnBoardingProcess/Forms/Form2";
import Form3 from "../components/OnBoardingProcess/Forms/Form3";

const Page = () => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="py-4 px-8 flex flex-col space-y-6">
        <LogoHeader />
        <Progress percent={66} />
        <div className="flex flex-col space-y-12 pr-12">
          <h1 className="font-bold text-2xl">Organization Registration</h1>
          <Form2 />
        </div>

        <div className="flex justify-between pr-12">
          <Button className="bg-[#F3F4F6FF] rounded-xl">
            <LeftOutlined />
            <h1>Back</h1>
          </Button>
          <Button className="bg-primary text-white rounded-xl py-4">
            <h1>Continue</h1>
            <RightOutlined />
          </Button>
        </div>
      </div>
      <Illustration />
    </main>
  );
};

export default Page;
