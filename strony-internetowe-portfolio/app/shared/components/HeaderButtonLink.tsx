import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  buttonTitle: string;
  href: string;
}
const HeaderButtonLink = ({ title, subtitle, buttonTitle, href }: Props) => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div className="py-10 font-[Inter] w-full flex flex-col items-center">
        <p className="font-semibold text-3xl text-[#66615e]">{title}</p>
        <p className="font-light text-lg mt-3 text-second pb-10">{subtitle}</p>
        <Link href={href}>
          <button className="text-sm px-10 py-2 bg-gray-200 rounded-2xl text-second hover:bg-gray-300 transition-background duration-300 ">
            {buttonTitle}
          </button>
        </Link>
      </div>
    </BackgroundWrapper>
  );
};

export default HeaderButtonLink;
