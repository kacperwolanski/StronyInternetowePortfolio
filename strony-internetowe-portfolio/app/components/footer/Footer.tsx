import React from "react";
import Policy from "./Policy";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/app/shared/assets/contactSocialMedias";
import Logo from "@/app/shared/assets/logo";

const Footer = () => {
  return (
    <footer className="footer footer-center text-second text-base-content rounded pt-20">
      <div className="mt-5">
        <Logo />
      </div>
      <nav className="grid grid-flow-col gap-4 ">
        <a className="link link-hover" href="#home">
          Home
        </a>
        <a className="link link-hover" href="#portfolio">
          Portfolio
        </a>
        <a className="link link-hover" href="#kontakt">
          Kontakt
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <MailIcon />
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
        </div>
      </nav>
      <Policy />
    </footer>
  );
};

export default Footer;
