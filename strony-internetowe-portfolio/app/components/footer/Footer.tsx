import React from "react";
import Policy from "./components/Policy";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/app/shared/assets/contactSocialMedias";
import Logo from "@/app/shared/assets/logo";
import {
  contactPath,
  facebookUrl,
  githubUrl,
  gmailUrl,
  homePath,
  linkedinUrl,
  portfolioPath,
  servicePath,
} from "@/app/appContacts";
import SocialMedium from "./components/SocialMedium";

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
        <div className="grid grid-flow-col gap-6 mt-4">
          <SocialMedium
            icon={<LinkedinIcon />}
            title="Linkedin"
            href={linkedinUrl}
          />
          <SocialMedium icon={<MailIcon />} title="Gmail" href={gmailUrl} />
          <SocialMedium icon={<GithubIcon />} title="Github" href={githubUrl} />
          <SocialMedium
            icon={<FacebookIcon />}
            title="Facebook"
            href={facebookUrl}
          />
        </div>
      </nav>
      <Policy />
    </footer>
  );
};

export default Footer;
