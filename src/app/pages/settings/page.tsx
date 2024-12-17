import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";

export const metadata: Metadata = {
  title: "Sozlamalar",
  description: "",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        {/* <Breadcrumb pageName="Sozlamalar" /> */}

        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
