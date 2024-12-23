import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Ijtimoy Tarmoqlar",
  description: " ",
};

const GamesPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Ijtimoy Tarmoqlar" />
        Ijtimoy Tarmoqlar
      </div>
    </DefaultLayout>
  );
};

export default GamesPage;
