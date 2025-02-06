import ProfileImage from "@/app/shared/assets/profileImage";
import React from "react";
import IntroText from "./IntroText";
import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";

const Introduction = () => {
  return (
    <BackgroundWrapper backgroundColor="first">
      <div className="flex text-first justify-between">
        <IntroText />
        <div className="flex justify-center ">
          <ProfileImage />
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Introduction;
