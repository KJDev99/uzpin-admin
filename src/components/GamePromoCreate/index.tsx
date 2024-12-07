"use client";
import SelectGroupOne from "../SelectGame/SelectGroupOne";
import SwitcherThree from "../SelectOption/SwitcherThree";

const GamesPromoCreate = () => {
  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Yangi O&apos;yin Malumotlari
          </h3>
        </div>

        <div className="grid grid-cols-6 gap-5.5 p-6.5">
          <div className="col-span-6">
            <div className="col-span-6">
              <SelectGroupOne />
            </div>
          </div>
          <div className="col-span-3">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Promokod nomi
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>

          <div className="col-span-3">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Kelish Narxi
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Mijoz uchun narx USD
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Mijoz uchun narx UZS
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Mijoz uchun narx RUBL
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Sotuvchi uchun narx USD
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Sotuvchi uchun narx UZS
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Sotuvchi uchun narx RUBL
            </label>
            <input
              type="text"
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>

          <div className="col-span-6">
            <SwitcherThree />
          </div>
          <div className="col-span-6 flex justify-end">
            <button className="flex w-40 justify-center rounded bg-green-400 px-5 py-2 text-white">
              SAQLASH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesPromoCreate;