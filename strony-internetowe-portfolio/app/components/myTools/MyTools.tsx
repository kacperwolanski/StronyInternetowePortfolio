import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import SectionSeparator from "@/app/shared/components/SectionSeparator";
import React from "react";
import Tool from "./Tool";
import { myToolsList } from "@/app/shared/mappersData/myToolsList";

const MyTools = () => {
  const tripledList = [...myToolsList, ...myToolsList, ...myToolsList];

  return (
    <BackgroundWrapper backgroundColor="first">
      <div className="px-100 overflow-hidden relative">
        <SectionSeparator
          title="Technologie"
          subTitle="Narzędzia i technologie, które wykorzystuję w pracy"
        />

        <div className="tools-side-shadow h-40 w-10 absolute -left-20"></div>

        <div className="py-10 flex gap-20 items-center justify-center animate-scroll group hover:[animation-play-state:paused]">
          {tripledList.map((tool, index) => (
            <Tool tool={tool} key={index} />
          ))}
        </div>
        <div className="tools-side-shadow h-40 w-10 absolute -right-20 bottom-0"></div>
      </div>
    </BackgroundWrapper>
  );
};

export default MyTools;
