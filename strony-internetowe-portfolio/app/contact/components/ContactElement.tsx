import { CopyIcon } from "@/app/shared/assets/otherIcons";
import React from "react";

interface Props {
  title: string;
  icon: JSX.Element;
}
const ContactElement = ({ title, icon }: Props) => {
  return (
    <div className="flex items-center gap-5">
      {icon}
      <p className="font-semibold text-xl text-[#66615e]">{title}</p>
      <CopyIcon />
    </div>
  );
};

export default ContactElement;
