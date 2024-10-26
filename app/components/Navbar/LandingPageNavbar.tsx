import React from "react";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import { Button } from "antd";
const LandingPageNavbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full shadow-sm">
    <div className="flex px-4 py-3 justify-between bg-white">
      <div className="flex flex-row space-x-2  items-center">
        <Image draggable={false} className="w-10 h-10" alt="tta" src={Logo} />
        <h1 className="font-bold text-2xl">TimeTable Architect</h1>
      </div>
      <div className="flex space-x-2 items-center">
        <Button className="text-primary" type="link">Sign in</Button>
        <Button className="bg-primary text-white">Sign up</Button>
      </div>
    </div>
    </div>
  );
};

export default LandingPageNavbar;
