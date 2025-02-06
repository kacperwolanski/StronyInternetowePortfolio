import { SingleService } from "@/app/shared/mappersData/serviceProces";
import React from "react";

interface Props {
  service: SingleService;
}
const SingleProces = ({ service }: Props) => {
  const { title, subTitle, icon } = service;
  return (
    <div className="flex flex-col bg-white rounded-lg w-[320px] h-[300px] px-10 py-5 font-[Inter] gap-2">
      <div>
        <div className="bg-first rounded-lg w-[60px] h-[60px] flex items-center justify-center">
          {icon}
        </div>
        <header className="text-first font-semibold text-xl mt-5">
          {title}
        </header>
      </div>
      <p className="font-light">{subTitle}</p>
    </div>
  );
};

export default SingleProces;
