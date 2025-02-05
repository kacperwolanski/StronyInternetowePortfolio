import React from "react";

import TopMenuButtons from "./topMenuButtons/TopMenuButtons";
import LogoComponent from "@/app/shared/assets/logo";
import ContactMeButton from "@/app/shared/components/ContactMeButton";
import ThemeSwitcher from "@/app/shared/components/ThemeSwitcher";

const TopMenu = () => {
  return (
    <div className="flex justify-between px-40 pb-[50] pt-5 bg-first text-first">
      <div className="text-second">
        <LogoComponent />
      </div>
      <div className="flex gap-10">
        <TopMenuButtons />
        <ContactMeButton />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default TopMenu;
