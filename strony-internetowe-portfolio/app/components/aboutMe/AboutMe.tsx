import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import React from "react";
import AboutMeText from "./components/AboutMeText";
import { MacBookCode } from "@/app/shared/assets/otherIcons";

const AboutMe = () => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div className="flex gap-20 lg:flex-row md:flex-col-reverse sm:flex-col-reverse xxs:flex-col-reverse items-center">
        <MacBookCode />
        <AboutMeText />
      </div>
    </BackgroundWrapper>
  );
};

export default AboutMe;
