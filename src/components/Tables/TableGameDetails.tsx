"use client";
import { FaEye, FaFileArrowUp } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const productData = [
  {
    name: "60 UC",
    sold: "639",
    nosold: 123433,
    priceUZS: 296,
    priceUSD: 0.85,
  },
];

const TableGameDetails = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="grid grid-cols-11 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-12 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Promokod nomi</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Sotilmagan</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Sotilgan</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Narx UZS</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Narx USD</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium"></p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-12 md:px-6 2xl:px-7.5"
          key={key}
        >
          <Link href={`${key}/${key}`} className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-bold text-black underline dark:text-dark-8">
                {key + 1}. {product.name}
              </p>
            </div>
          </Link>

          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.sold}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.nosold}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.priceUZS}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {product.priceUSD}
              </p>
            </div>
          </div>

          <div className="col-span-2 flex cursor-pointer items-center gap-2">
            <Link href="promo-create">
              <div className="rounded bg-[orange] px-3 py-1 text-white">
                <FiEdit2 />
              </div>
            </Link>
            <div
              onClick={() => setModal(true)}
              className="rounded bg-[green] px-3 py-1 text-white"
            >
              <FaFileArrowUp />
            </div>
            <div className="rounded bg-[red] px-3 py-1 text-white">
              <MdOutlineDeleteOutline />
            </div>
          </div>
        </div>
      ))}

      {modal && (
        <div className="z-5000 absolute left-[50%] top-[50%] h-max w-[500px] translate-x-[-50%] translate-y-[-100%] rounded-lg bg-white px-4 py-4 shadow-2xl dark:bg-gray-dark dark:shadow-card">
          <div className="col-span-6">
            <div className="flex justify-between">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Promokod qo&apos;shish
              </label>
              <button className="mb-3 text-sm" onClick={() => setModal(false)}>
                ❌
              </button>
            </div>
            <textarea className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white" />
            <div className="flex justify-end">
              <button className="mt-4 rounded bg-green-900 px-4 py-2 text-white ">
                Qo&apos;shish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableGameDetails;
