"use client";

import React from "react";
import LogoComponent from "@/app/shared/assets/logo";
import ContactMeButton from "@/app/shared/components/ContactMeButton";
import ThemeSwitcher from "@/app/shared/components/ThemeSwitcher";
import useIsTopMenuHidden from "@/app/hooks/useTopMenuShowHook";
import { responsivePaddingX } from "@/app/appContacts";
import TopMenuButtons from "../topMenuButtons/TopMenuButtons";

const TopMenuDesktop = () => {
  const { isHidden } = useIsTopMenuHidden();
  const translation = isHidden ? "-translate-y-full" : "translate-y-0";

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-[80px] flex items-center justify-between 
                backdrop-blur-2xl transition-transform duration-400 ease-in-out 
             ${translation} ${responsivePaddingX} bottom-shadowed`}
      >
        <div className="text-second">
          <LogoComponent />
        </div>
        <div className="flex gap-10">
          <TopMenuButtons />
          <ContactMeButton />
          <ThemeSwitcher />
        </div>
      </div>
      <div className="bg-first h-20"></div>
    </div>
  );
};

export default TopMenuDesktop;
