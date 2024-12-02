import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableCard from "@/components/Tables/TableCard";

export const metadata: Metadata = {
  title: "Karta Qo'shish",
  description: " ",
};

const GamesPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Karta Qo'shish" />
        <TableCard />
      </div>
    </DefaultLayout>
  );
};

export default GamesPage;
