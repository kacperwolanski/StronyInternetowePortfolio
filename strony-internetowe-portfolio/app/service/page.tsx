import React from "react";
import BackgroundWrapper from "../shared/components/BackgroundWrapper";
import SectionSeparator from "../shared/components/SectionSeparator";
import ProcesList from "./components/ProcesList";
import PlansList from "./components/PlansList";

const Service = () => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div>
        <PlansList />
        <SectionSeparator
          title="Współpraca"
          subTitle="Od pomysłu do realizacji"
        />

        <ProcesList />
      </div>
    </BackgroundWrapper>
  );
};

export default Service;
