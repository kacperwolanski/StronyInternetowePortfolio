import React from "react";
import TopMenuButton from "./TopMenuButton";

const TopMenuButtons = () => {
  return (
    <div className="flex gap-10 justify-between w-full max-w-2xl">
      <TopMenuButton title="Home" linkTo="#" />
      <TopMenuButton title="Portfolio" linkTo="#" />
    </div>
  );
};

export default TopMenuButtons;
