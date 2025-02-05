import React from "react";
import TopMenuButton from "./TopMenuButton";
import { homePath, portfolioPath } from "@/app/appContacts";

const TopMenuButtons = () => {
  return (
    <div className="flex gap-10 justify-between w-full max-w-2xl">
      <TopMenuButton title="Home" linkTo={homePath} />
      <TopMenuButton title="Portfolio" linkTo={portfolioPath} />
    </div>
  );
};

export default TopMenuButtons;
