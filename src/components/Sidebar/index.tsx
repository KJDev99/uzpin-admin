"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { RiHome6Line, RiMenuFold2Line } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { CgGames } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircleUser, FaRobot, FaUsers } from "react-icons/fa6";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "ADMIN MENU",
    menuItems: [
      {
        icon: <RiHome6Line className="text-2xl" />,
        label: "Bosh sahifa",
        route: "/",
      },
      {
        icon: <IoStatsChart className="text-2xl" />,
        label: "Statistikalar",
        route: "/calendar",
      },

      {
        icon: <CgGames className="text-2xl" />,
        label: "O'yinlar",
        route: "/games",
      },
      {
        icon: <CiCircleCheck className="text-2xl" />,
        label: "Sotilgan Promokodlar",
        route: "/sales-promo",
      },
      {
        icon: <FaUsers className="text-2xl" />,
        label: "Hamkorlar",
        route: "/partners",
      },
      {
        icon: <FaRegCircleUser className="text-2xl" />,
        label: "Foydalanuvchilar",
        route: "#",
        children: [
          { label: "Foydalanuvchilar", route: "/users/user" },
          { label: "Balansni To'ldirish", route: "/users/add-balans" },
          { label: "Tasdiqlangan Balans", route: "/users/confirm-balans" },
          // { label: "Bekor qilinganlar", route: "/users/cancel-balans" },
        ],
      },
      {
        icon: <RiMenuFold2Line className="text-2xl" />,
        label: "Umumiy",
        route: "#",
        children: [
          { label: "Karta Qo'shish", route: "/general/add-card" },
          // { label: "Yordam Sahifa", route: "/general/help" },
          // { label: "Afzalliklar", route: "/general/advantage" },
          // { label: "Ijtimoiy Tarmoqlar", route: "/general/social-network" },
          // { label: "Sozlamalar", route: "/general/settings" },
        ],
      },
      {
        icon: <FaRobot className="text-2xl" />,
        label: "Bot Promokod",
        route: "#",
        children: [
          { label: "Umumiy qo'lanma", route: "/telegram-bot/general" },
          { label: "Qo'llanma Video", route: "/telegram-bot/videos" },
          { label: "Aloqa", route: "/telegram-bot/contack" },
          { label: "O'yinlar", route: "/telegram-bot/games" },
          { label: "Promokodlar", route: "/telegram-bot/promo-codes" },
          { label: "Sotilgan Promokodlar", route: "/telegram-bot/sales-promo" },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            {/* <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            /> */}
            UPGROW
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;