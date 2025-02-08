import React from "react";
import TopMenuButton from "./TopMenuButton";
import { sectionIds } from "@/app/appContacts";

interface Props {
  inCol?: boolean;
}
const TopMenuButtons = ({ inCol }: Props) => {
  return (
    <div
      className={`flex gap-10 items-center justify-between w-full max-w-2xl ${
        inCol && "flex-col"
      }`}
    >
      <TopMenuButton title="Home" linkTo={sectionIds.home} />
      <TopMenuButton title="Portfolio" linkTo={sectionIds.portfolio} />
      <TopMenuButton title="Współpraca" linkTo={sectionIds.service} />
    </div>
  );
};

export default TopMenuButtons;
