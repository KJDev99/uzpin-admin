"use client";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import axiosInstance from "@/libs/axios";

interface Game {
  id: string;
  name_uz: string;
  cover: string;
  photo: string;
  is_active: boolean;
}

const TableGame = () => {
  const [data, setData] = useState<Game[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axiosInstance.get("/root/game/games");
        setData(response.data.results || []);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      }
    };

    fetchStats();
  }, []);

  const DeleteGame = async (gameId: string) => {
    try {
      await axiosInstance.delete(`/root/game/games/${gameId}/detail`);
      setData((prevData) => prevData.filter((game) => game.id !== gameId));
    } catch (error) {
      console.error("O'yinni o'chirishda xatolik:", error);
    }
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex items-center justify-between px-4 py-6 md:px-6 xl:px-9">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          O&apos;yinlar
        </h4>
        <Link
          href="games-create"
          className="flex w-20 justify-center rounded bg-green-400 px-5 py-1 text-2xl text-white"
        >
          +
        </Link>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">O&apos;yin nomi</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Asosiy Rasm</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Banner rasm</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Holati</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium"></p>
        </div>
      </div>

      {data.length > 0 &&
        data.map((game, index) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={game.id}
          >
            <Link
              href={`games/${game.id}}`}
              className="col-span-2 flex items-center"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                  {index + 1}. {game?.name_uz}
                </p>
              </div>
            </Link>
            <Link
              href={`games/${game.id}`}
              className="col-span-2 flex items-center"
            >
              <div className="h-12.5 w-15 rounded-md">
                <Image src={game?.cover} width={60} height={50} alt="game" />
              </div>
            </Link>
            <Link
              href={`games/${game.id}`}
              className="col-span-2 flex items-center"
            >
              <div className="h-12.5 w-15 rounded-md">
                <Image src={game?.photo} width={60} height={50} alt="game" />
              </div>
            </Link>
            <Link
              href={`games/${game.id}`}
              className="col-span-1 flex items-center"
            >
              {game.is_active ? "Faol" : "Faol emas"}
            </Link>
            <div className="col-span-1 flex cursor-pointer items-center justify-end gap-2">
              <Link href={`games-create?${game.id}`}>
                <div className="rounded bg-[orange] px-3 py-1 text-white">
                  <FiEdit2 size={20} />
                </div>
              </Link>
              <div
                onClick={() => DeleteGame(game.id)}
                className="rounded bg-[red] px-3 py-1 text-white"
              >
                <MdOutlineDeleteOutline size={20} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableGame;
