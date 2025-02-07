import SocialMedium from "@/app/components/footer/components/SocialMedium";
import React from "react";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/app/shared/assets/contactSocialMedias";
import {
  facebookUrl,
  githubUrl,
  gmailUrl,
  linkedinUrl,
} from "@/app/appContacts";
const SocialMedias = () => {
  return (
    <div className="flex justify-between w-full gap-5">
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
  );
};

export default SocialMedias;
