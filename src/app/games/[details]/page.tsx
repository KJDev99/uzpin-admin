import GamesBoxDetails from "@/components/GamesBoxDetails";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O'YINLAR",
  description: "",
};

const GamesPageDetails = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <GamesBoxDetails />
      </div>
    </DefaultLayout>
  );
};

export default GamesPageDetails;
