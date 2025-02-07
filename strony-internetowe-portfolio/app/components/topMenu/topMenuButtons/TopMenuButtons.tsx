import React from "react";
import TopMenuButton from "./TopMenuButton";
import { homePath, portfolioPath, servicePath } from "@/app/appContacts";
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
      <TopMenuButton title="Home" linkTo={homePath} />
      <TopMenuButton title="Portfolio" linkTo={portfolioPath} />
      <TopMenuButton title="Współpraca" linkTo={servicePath} />
    </div>
  );
};

export default TopMenuButtons;
