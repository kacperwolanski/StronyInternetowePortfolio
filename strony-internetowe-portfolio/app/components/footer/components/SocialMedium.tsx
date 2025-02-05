import React from "react";

interface Props {
  icon: JSX.Element;
  href: string;
  title: string;
}
const SocialMedium = ({ icon, href, title }: Props) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        {icon}
      </a>
    </div>
  );
};

export default SocialMedium;
