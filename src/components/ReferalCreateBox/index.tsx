"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/libs/axios";
import UploadComponent from "@/components/UploadComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function ReferalCreateBox() {
  const [formData, setFormData] = useState({
    fullname: "",
    promo_code: "",
    discount: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  const fullQuery = searchParams?.toString();
  const extractedValue = fullQuery?.split("=")[0];

  useEffect(() => {
    const fetchCardDetails = async () => {
      if (extractedValue) {
        try {
          const response = await axiosInstance.get(
            `/root/partner/${extractedValue}`,
          );
          const { fullname, promo_code, discount } = response.data;

          setFormData({
            fullname: fullname || "",
            promo_code: promo_code || "",
            discount: discount || "",
          });
        } catch (error) {
          console.error("Failed to fetch card details:", error);
        }
      }
    };

    fetchCardDetails();
  }, [extractedValue]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "discount" ? value.replace(/\D/g, "") : value, // Faqat raqam kiritish
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const preparedData = {
      fullname: formData.fullname, // String
      promo_code: formData.promo_code, // String
      discount: Number(formData.discount) || 0, // Number
    };

    if (extractedValue) {
      await axiosInstance.put(`/root/partner/${extractedValue}`, preparedData);
      router.push(`/partners/referal`);
      toast.success("Hamkor muvaffaqiyatli yangilandi");
    } else {
      try {
        await axiosInstance.post("/root/partner/", preparedData);
        toast.success("Hamkor muvaffaqiyatli qo'shildi!");
        router.push("/partners/referal");
      } catch (error) {
        toast.error("Hamkor Qo'shishda Xatolik!");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">
            Referal qo&apos;shish
          </h3>
        </div>
        <form
          className="grid grid-cols-6 gap-5.5 p-6.5"
          onSubmit={handleSubmit}
        >
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Ismi
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Promokod
            </label>
            <input
              type="text"
              name="promo_code"
              value={formData.promo_code}
              onChange={handleChange}
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Soni
            </label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke px-3 py-[9px] outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-stroke file:px-2.5 file:py-1 file:text-body-xs file:font-medium file:text-dark-5 focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white"
            />
          </div>
          <div className="col-span-6 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex w-40 justify-center rounded bg-green-400 px-5 py-2 text-white"
            >
              {loading ? "Saqlanmoqda..." : "SAQLASH"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
