"use client";
import { sectionIds } from "@/app/appContacts";
import { scrollToSection } from "@/app/helpers/scrollToSection";
import React from "react";

const ContactMeButton = () => {
  const handleClick = () => {
    scrollToSection(sectionIds.contact);
  };
  return (
    <button onClick={handleClick} className="btn btn-neutral">
      Kontakt
    </button>
  );
};

export default ContactMeButton;
