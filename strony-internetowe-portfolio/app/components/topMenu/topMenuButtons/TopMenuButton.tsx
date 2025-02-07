import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  linkTo: string;
}
const TopMenuButton = ({ title, linkTo }: Props) => {
  return (
    <Link
      className="flex items-center hover:text-[var(--secondFontColor)] transition-all duration-300 "
      href={linkTo}
    >
      {title}
    </Link>
  );
};

export default TopMenuButton;
