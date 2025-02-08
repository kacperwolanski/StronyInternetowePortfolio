"use client";
import Image from "next/image";
import logo from "./LightLogo.svg";
import { scrollToSection } from "@/app/helpers/scrollToSection";
import { sectionIds } from "@/app/appContacts";

const Logo = () => {
  const handleClick = () => {
    scrollToSection(sectionIds.home);
  };
  return (
    <div className="text-first">
      <Image src={logo} alt="Logo" onClick={handleClick} />
    </div>
  );
};

export default Logo;
