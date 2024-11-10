import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaUserGraduate,
  FaBuilding,
  FaChalkboardUser,
  FaGear,
} from "react-icons/fa6";
import { Menu } from "antd";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = (key: string, page: string) => {
    localStorage.setItem("selectedKey", key);
    router.push(page);
  };

  const menuItems = [
    { key: "1", title: "Settings", icon: FaGear, path: "/dashboard" },
    {
      key: "2",
      title: "Teachers",
      icon: FaChalkboardUser,
      path: "/dashboard/teacher",
    },
    {
      key: "3",
      title: "Rooms",
      icon: FaBuilding,
      path: "/dashboard/rooms",
    },
    {
      key: "4",
      title: "Courses",
      icon: FaBook,
      path: "/dashboard/courses",
    },
    {
      key: "5",
      title: "Classes",
      icon: FaUserGraduate,
      path: "/dashboard/classes",
    },
  ];

  return (
    <Sider width="5%" className="h-screen bg-gray-800">
      <div className="flex justify-center items-center my-4">
        <Image alt="Logo" src={Logo} className="w-8 h-8" />
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
          selectedKeys={[
            menuItems.find((item) => (item.path == '/dashboard' ? pathname == item.path : pathname.includes(item.path)) )?.key || "",
          ]}
        >
          {menuItems.map(({ key, title, icon: Icon, path }) => (
            <Menu.Item
              key={key}
              title={title}
              onClick={() => handleMenuClick(key, path)}
            >
              <Icon
                className={
                 (path == '/dashboard' ? pathname == path : pathname.includes(path))  ? "text-indigo-500" : "text-gray-400"
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
