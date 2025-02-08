import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import SectionSeparator from "@/app/shared/components/SectionSeparator";
import React from "react";
import Tool from "./Tool";
import { myToolsList } from "@/app/shared/mappersData/myToolsList";

const MyTools = () => {
  const tripledList = [
    ...myToolsList,
    ...myToolsList,
    ...myToolsList,
    ...myToolsList,
  ];
  return (
    <BackgroundWrapper backgroundColor="first">
      <div className="px-100 overflow-hidden">
        <SectionSeparator
          title="Technologie"
          subTitle="Narzędzia i technoligie, które wykorzystuję w pracy"
        />
        <div className=" flex gap-20 items-center justify-center animate-scroll">
          {tripledList.map((tool: Tool, index: number) => (
            <Tool tool={tool} key={index} />
          ))}
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default MyTools;
