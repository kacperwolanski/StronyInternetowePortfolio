import React from "react";
import Policy from "./components/Policy";
import Logo from "@/app/shared/assets/logo";
import SocialMedias from "@/app/shared/components/SocialMedias";
import Contact from "@/app/contact/Contact";
import SectionSeparator from "@/app/shared/components/SectionSeparator";

const Footer = () => {
  return (
    <div className="pt-20">
      <SectionSeparator
        title="Kontakt"
        subTitle="Zbudujmy stronę, która wyróżni Cię w sieci"
      />

      <div
        style={{
          backgroundImage: `url(${"https://github.com/user-attachments/assets/e225878a-4d1e-480f-b9e4-c6a6e5069d5b"})`,
        }}
      >
        <Contact />
        <footer className="footer footer-center text-second text-base-content rounded">
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
      </div>
    </div>
  );
};

export default Footer;
