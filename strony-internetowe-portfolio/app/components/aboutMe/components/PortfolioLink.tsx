import { portfolioPath } from "@/app/appContacts";
import Link from "next/link";
import React from "react";

const PortfolioLink = () => {
  return (
    <Link href={portfolioPath}>
      <button className="border border-[#b6aea9] text-[#66615E] rounded-xl px-12 py-2 transition-colors duration-200 hover:bg-gray-200 mt-5">
        Portfolio
      </button>
    </Link>
  );
};

export default PortfolioLink;
