import React from "react";

import TopMenuButtons from "./topMenuButtons/TopMenuButtons";
import LogoComponent from "@/app/shared/assets/logo";
import ContactMeButton from "@/app/shared/components/ContactMeButton";
import ThemeSwitcher from "@/app/shared/components/ThemeSwitcher";

const TopMenu = () => {
  return (
    <div className="flex justify-between  px-10 pb-[50] pt-5">
      <div className="">
        <LogoComponent />
      </div>
      <div className="flex gap-20">
        <TopMenuButtons />
        <ContactMeButton />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default TopMenu;
