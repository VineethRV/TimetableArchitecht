import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGear,
  faUserGraduate,
  faBuilding,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import Logo from '@/public/Logo.png'
import Image from "next/image";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = (key: string, page: string) => {
    setSelectedKey(key);
    localStorage.setItem("selectedKey", key);
    router.push(`/dashboard${page}`);
  };

  const menuItems = [
    { key: "1", title: "Settings", icon: faGear, path: "/" },
    {
      key: "2",
      title: "Teaching",
      icon: faChalkboardTeacher,
      path: "/teacher",
    },
    { key: "3", title: "Departments", icon: faBuilding, path: "/rooms" },
    {
      key: "4",
      title: "Resources",
      icon: faBook,
      path: "/courses",
    },
    { key: "5", title: "Students", icon: faUserGraduate, path: "/classes" },
  ];

  return (
    <Sider width="5%" className="h-screen bg-gray-800">
      <div className="flex justify-center items-center my-4">
        <Image alt="Logo" src={Logo} className="w-8 h-8"/>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex justify-center mt-[5vh]"
      >
        <Menu
          mode="vertical"
          className="bg-gray-800"
          selectedKeys={[selectedKey]}
        >
          {menuItems.map(({ key, title, icon, path }) => (
            <Menu.Item
              key={key}
              title={title}
              onClick={() => handleMenuClick(key, path)}
            >
              <FontAwesomeIcon
                icon={icon}
                className={
                  selectedKey === key ? "text-indigo-500" : "text-gray-400"
                }
              />
            </Menu.Item>
          ))}
        </Menu>
      </motion.div>
    </Sider>
  );
};

export default DashboardSidebar;
