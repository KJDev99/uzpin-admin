"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import TableUser from "@/components/Tables/TableUser";
import { useState } from "react";
import SearchForm from "../Header/SearchForm";
const User = () => {
  // const [active, setActive] = useState(true);
  return (
    <>
      {/* <div className="mb-4 flex justify-between w-full gap-4 rounded bg-slate-200 px-4 py-2 dark:bg-slate-900">
        <div className="flex gap-4">
          <button
            className={` rounded border border-slate-400 px-4 py-2  ${active && "bg-primary text-white"}`}
            onClick={() => setActive(true)}
          >
            Oddiy Mijoz
          </button>
          <button
            className={` rounded border border-slate-400 px-4 py-2  ${!active && "bg-primary text-white"}`}
            onClick={() => setActive(false)}
          >
            Sotuvchi
          </button>
        </div>
        <div>
          <SearchForm/>
        </div>
      </div> */}

      {/* <Breadcrumb pageName="Foydalanuvchilar" /> */}
      <TableUser />
    </>
  );
};

export default User;
