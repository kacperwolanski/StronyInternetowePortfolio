"use client";
import { sectionIds } from "@/app/appContacts";
import { scrollToSection } from "@/app/helpers/scrollToSection";
import React from "react";

const PortfolioLink = () => {
  const handleClick = () => {
    scrollToSection(sectionIds.portfolio);
  };
  return (
    <button
      onClick={handleClick}
      className="border border-[#b6aea9] text-[#66615E] rounded-xl px-12 py-2 transition-colors duration-200 hover:bg-gray-200 mt-5"
    >
      Portfolio
    </button>
  );
};

export default PortfolioLink;
