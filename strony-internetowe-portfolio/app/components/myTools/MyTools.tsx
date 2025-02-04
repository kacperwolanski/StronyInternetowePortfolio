import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import SectionSeparator from "@/app/shared/components/SectionSeparator";
import React from "react";
import Tool from "./Tool";
import { myToolsList } from "./myToolsList";

const MyTools = () => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div>
        <SectionSeparator
          title="Technologie"
          subTitle="Narzędzia i technoligie, które wykorzystuję w pracy"
        />
        <div>
          {myToolsList.map((tool: Tool) => (
            <Tool tool={tool} key={tool.title} />
          ))}
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default MyTools;
