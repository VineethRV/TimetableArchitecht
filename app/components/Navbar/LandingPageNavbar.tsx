import React from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import { Button } from "antd";
const LandingPageNavbar = () => {
  return (
    <div className="flex px-4 py-3 justify-between">
      <div className="flex flex-row space-x-2  items-center">
        <Image className="w-12 h-12" alt="tta" src={Logo} />
        <h1 className="font-bold text-2xl">TimeTable Architect</h1>
      </div>
      <div className="flex space-x-2 items-center">
        <Button className="text-primary" type="link">Sign in</Button>
        <Button className="bg-primary text-white">Sign up</Button>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
