import React from "react";
import SinglePlan from "./SinglePlan";
import { planList } from "@/app/shared/mappersData/planList";
import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import SectionSeparator from "@/app/shared/components/SectionSeparator";

const PlansList = () => {
  return (
    <BackgroundWrapper backgroundColor="first">
      <div>
        <SectionSeparator
          title="Rozwiązania które oferuję"
          subTitle="Wybierz plan najbardziej pasujący do Twoich oczekiwań"
        />
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {planList.map((plan) => (
            <SinglePlan key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default PlansList;
