import React from "react";
import Policy from "./components/Policy";
import Logo from "@/app/shared/assets/logo";
import SocialMedias from "@/app/shared/components/SocialMedias";

const Footer = () => {
  return (
    <footer className="footer footer-center text-second text-base-content rounded pt-20">
      <div className="mt-5">
        <Logo />
      </div>
      <nav className="grid grid-flow-col gap-4 ">
        <button className="link link-hover">Home</button>
        <button className="link link-hover">Portfolio</button>
        <button className="link link-hover">Kontakt</button>
        <button className="link link-hover">Współpraca</button>
      </nav>
      <nav>
        <SocialMedias />
      </nav>
      <Policy />
    </footer>
  );
};

export default Footer;
