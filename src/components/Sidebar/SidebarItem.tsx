import React, { useEffect, useState } from "react";
import Link from "next/link";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { IoIosArrowDown } from "react-icons/io";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    setPageName(updatedPageName);
  };

  const getClassName = () => {
    if (isMounted && pageName === item.label.toLowerCase()) {
      return "bg-primary/[.07] text-primary dark:bg-white/10 dark:text-white";
    }
    return "text-dark-4 hover:bg-gray-2 hover:text-dark dark:text-gray-5 dark:hover:bg-white/10 dark:hover:text-white";
  };

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${getClassName()} group relative flex items-center gap-3 rounded-[7px] px-3.5 py-3 font-medium duration-300 ease-in-out`}
        >
          {item.icon}
          {item.label}
          {item.message && (
            <span className="absolute right-11.5 top-1/2 -translate-y-1/2 rounded-full bg-red-light-6 px-1.5 py-px text-[10px] font-medium leading-[17px] text-red">
              {item.message}
            </span>
          )}
          {item.children && (
            <IoIosArrowDown
              className={`absolute right-3.5 top-1/2 -translate-y-1/2 fill-current ${
                isMounted && pageName === item.label.toLowerCase()
                  ? "rotate-180"
                  : ""
              }`}
            />
          )}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              isMounted && pageName !== item.label.toLowerCase() ? "hidden" : ""
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
