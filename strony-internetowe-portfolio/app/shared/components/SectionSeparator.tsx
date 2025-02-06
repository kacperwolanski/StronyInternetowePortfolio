import React from "react";

interface Props {
  title: string;
  subTitle: string;
}
const SectionSeparator = ({ title, subTitle }: Props) => {
  return (
    <div className="w-full items-center justify-center flex flex-col pt-10 font-[Inter] text-center">
      <p className="text-lg px-5 py-1 bg-gray-200 rounded-2xl text-second ">
        {title}
      </p>
      <p className="font-light text-lg mt-3 text-second pb-10 max-w-4xl">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionSeparator;
