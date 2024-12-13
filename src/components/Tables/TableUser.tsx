import Image from "next/image";
import Link from "next/link";
import { BiTransfer } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { FaEye, FaMoneyBillTransfer } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";
import SearchForm from "../Header/SearchForm";

const productData = [
  {
    email: "jamshidqayimov0399@gmail.com",
    name: "Jamshid",
    surname: "Qayimov",
    number: "+998997699900",
    addTime: "04.04.2023 06:09",
    profit: "19,048,002 so'm",
  },
];

const TableUser = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex items-center justify-between px-4 py-6 md:px-6 xl:px-9">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Barcha Foydalanuvchilar
        </h4>
        <div>
          <SearchForm />
        </div>
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
      </div>

      <div className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">E-Pochta</p>
        </div>
        <div className="col-span-2 flex items-center gap-1">
          <p className="font-medium">Ism</p>
          <p className="font-medium">Familya</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="font-medium">Familya</p>
        </div> */}
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Telefon Raqam</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Yaratilgan vaqt</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Joriy hisob</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium"></p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {key + 1}. {product.email}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.name}
              </p>
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.surname}
              </p>
            </div>
          </div>
          {/* <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.surname}
              </p>
            </div>
          </div> */}
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.number}
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.addTime}
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.profit}
              </p>
            </div>
          </div>
          <div className="col-span-1 flex cursor-pointer items-center gap-2">
            <Link
              href={"user-edit"}
              className="rounded bg-[orange] px-3 py-1 text-white"
            >
              <FiEdit2 />
            </Link>
            <Link
              href={"money-received"}
              className="rounded bg-[darkblue] px-3 py-1 text-white"
            >
              <FaMoneyBillTransfer />
            </Link>
            <Link
              href={"add-balans"}
              className="rounded bg-[green] px-3 py-1 text-white"
            >
              <CiDollar />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableUser;
