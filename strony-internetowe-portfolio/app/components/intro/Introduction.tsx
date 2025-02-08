import ProfileImage from "@/app/shared/assets/profileImage";
import React from "react";
import IntroText from "./IntroText";
import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";

const Introduction = () => {
  return (
    <BackgroundWrapper backgroundColor="first">
      <div className="flex text-first justify-between gap-10 lg:flex-row md:flex-row sm:flex-col xxs:flex-col items-center">
        <IntroText />
        <div className="flex mt-10 ">
          <ProfileImage />
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Introduction;
