import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  linkTo: string;
}
const TopMenuButton = ({ title, linkTo }: Props) => {
  return (
    <Link className="flex items-center" href={linkTo}>
      {title}
    </Link>
  );
};

export default TopMenuButton;
