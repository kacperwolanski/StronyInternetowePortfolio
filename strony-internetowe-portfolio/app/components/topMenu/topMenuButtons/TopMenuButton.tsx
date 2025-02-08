"use client";

import { scrollToSection } from "@/app/helpers/scrollToSection";
import React from "react";

interface Props {
  title: string;
  linkTo: string;
}
const TopMenuButton = ({ title, linkTo }: Props) => {
  const handleClick = () => {
    scrollToSection(linkTo);
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center hover:text-[var(--secondFontColor)] transition-all duration-300 "
    >
      {title}
    </button>
  );
};

export default TopMenuButton;
