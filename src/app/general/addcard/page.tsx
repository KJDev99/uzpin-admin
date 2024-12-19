"use client";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SwitcherThree from "@/components/SelectOption/SwitcherThree";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";

// export const metadata: Metadata = {
//   title: "O'YINLAR QO'SHISH",
//   description: "",
// };

const AddCardPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        {/* <Breadcrumb pageName="Karta Qo'shish" /> */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-medium text-dark dark:text-white">
              Yangi Karta Malumotlari
            </h3>
          </div>
          <div className="grid grid-cols-6 gap-5.5 p-6.5">
            <div className="col-span-6">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Karta Rasmi
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div className="col-span-3">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Karta nomi
              </label>
              <input
                type="text"
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div className="col-span-3">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Karta raqami
              </label>
              <input
                type="text"
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
              />
            </div>

            <div className="col-span-3">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Karta egasi
              </label>
              <input
                type="text"
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div className="col-span-3">
              <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                Valyuta turi
              </label>

              <DefaultSelectOption
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[12px]"
                options={["SUMM", "RUBL", "DOLLOR"]}
              />
            </div>

            {/* <div className="col-span-6">
              <SwitcherThree />
            </div> */}
            <div className="col-span-6 flex justify-end">
              <button className="flex w-40 justify-center rounded bg-green-400 px-5 py-2 text-white">
                SAQLASH
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddCardPage;
