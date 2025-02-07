import React from "react";
import Policy from "./components/Policy";
import Logo from "@/app/shared/assets/logo";
import SocialMedias from "@/app/shared/components/SocialMedias";
import {
  contactPath,
  homePath,
  portfolioPath,
  servicePath,
} from "@/app/appContacts";

const Footer = () => {
  return (
    <footer className="footer footer-center text-second text-base-content rounded pt-20">
      <div className="mt-5">
        <Logo />
      </div>
      <nav className="grid grid-flow-col gap-4 ">
        <a className="link link-hover" href={homePath}>
          Home
        </a>
        <a className="link link-hover" href={portfolioPath}>
          Portfolio
        </a>
        <a className="link link-hover" href={contactPath}>
          Kontakt
        </a>
        <a className="link link-hover" href={servicePath}>
          Współpraca
        </a>
      </nav>
      <nav>
        <SocialMedias />
      </nav>
      <Policy />
    </footer>
  );
};

export default Footer;
