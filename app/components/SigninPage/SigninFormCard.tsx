"use client"
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Card, Input } from "antd";
import React from "react";
import { Checkbox } from "antd";
import { useRouter } from "next/navigation";

const SigninFormCard = () => {
  const router = useRouter();

  return (
    <Card className="flex flex-col w-[460px] px-8 rounded-2xl py-3 shadow-lg">
      <h1 className="font-bold text-3xl text-center">Welcome back 👋</h1>
      <div className="flex flex-col space-y-1 mt-6">
        <h1 className="font-bold text-sm">Email</h1>
        <Input
          size="large"
          placeholder="Enter your email"
          prefix={<MailOutlined className="pr-2" />}
        />
      </div>
      <div className="flex flex-col space-y-1 mt-4">
        <h1 className="font-bold text-sm">Password</h1>
        <Input.Password
          placeholder="Enter your password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          prefix={<LockOutlined className="pr-2"/>}
          className="text-base"
        />
      </div>
      <div className="flex mt-4 justify-between">
          <div className="flex space-x-2">
            <Checkbox/>
            <p className="text-sm font-medium">Keep me logged in</p>
          </div>
          <p className="text-[#636AE8FF] font-medium hover:cursor-pointer text-sm">Forget Password ?</p>
      </div>
      <Button className="mt-3 w-full bg-[#636AE8FF] font-bold py-4 text-white">Sign In</Button>
      <p className="text-sm text-center mt-4">Not a member yet? <span onClick={()=>router.push('/signup')} className="text-[#636AE8FF] font-bold hover:cursor-pointer">Register now</span></p>
    </Card>
  );
};

export default SigninFormCard;
