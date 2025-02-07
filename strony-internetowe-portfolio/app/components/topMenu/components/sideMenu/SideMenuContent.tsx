import React from "react";
import LogoComponent from "@/app/shared/assets/logo";
import TopMenuButtons from "../../topMenuButtons/TopMenuButtons";
import ThemeSwitcher from "@/app/shared/components/ThemeSwitcher";
import SocialMedias from "@/app/shared/components/SocialMedias";
import ContactMeButton from "@/app/shared/components/ContactMeButton";

const SideMenuContent = () => {
  return (
    <div className="flex flex-col h-full items-center">
      <LogoComponent />
      <div className="flex-grow flex flex-col items-center justify-center gap-20">
        <TopMenuButtons inCol />
        <ContactMeButton />
        <ThemeSwitcher />
      </div>

      <div className="mt-auto w-full flex flex-col items-center">
        <div className="divider"></div>
        <div className="w-full px-10">
          <SocialMedias />
        </div>
      </div>
    </div>
  );
};

export default SideMenuContent;
