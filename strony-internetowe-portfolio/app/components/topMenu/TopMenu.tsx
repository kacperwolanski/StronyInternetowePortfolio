import React from "react";

import TopMenuButtons from "./topMenuButtons/TopMenuButtons";
import LogoComponent from "@/app/shared/assets/logo";
import ContactMeButton from "@/app/shared/components/ContactMeButton";

const TopMenu = () => {
  return (
    <div className="border flex justify-between gap-10 px-10 py-5">
      <div className="w-full max-w-20">
        <LogoComponent />
      </div>

      <TopMenuButtons />
      <ContactMeButton />
    </div>
  );
};

export default TopMenu;
