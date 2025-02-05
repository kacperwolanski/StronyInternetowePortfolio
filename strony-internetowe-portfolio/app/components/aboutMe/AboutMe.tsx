import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import React from "react";
import AboutMeText from "./components/AboutMeText";
import { MacBookCode } from "@/app/shared/assets/otherIcons";

const AboutMe = () => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div>
        <div className="flex items-center justify-center">
          <AboutMeText />
          <MacBookCode />
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default AboutMe;
