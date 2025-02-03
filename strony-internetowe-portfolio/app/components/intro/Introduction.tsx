import ProfileImage from "@/app/shared/assets/profileImage";
import React from "react";
import IntroText from "./IntroText";

const Introduction = () => {
  return (
    <div className="flex">
      <IntroText />
      <div className="w-full flex justify-center ">
        <ProfileImage />
      </div>
    </div>
  );
};

export default Introduction;
