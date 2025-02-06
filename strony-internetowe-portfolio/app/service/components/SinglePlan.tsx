import { SinglePlan as SinglePlanType } from "@/app/shared/mappersData/planList";
import React from "react";
import SingleFeature from "./SingleFeature";

interface Props {
  plan: SinglePlanType;
}
const SinglePlan = ({ plan }: Props) => {
  const { title, destination, features, price } = plan;
  return (
    <div className="flex flex-col bg-white rounded-xl w-[420px] px-12 pt-5 pb-20 font-[Inter] gap-2">
      <div className="text-center">
        <header className="text-first font-bold text-3xl mt-5 ">{title}</header>
        <header className="text-second font-semibold text-3xl mb-4  ">
          {price}zł
        </header>
        <p className="font-light">{destination}</p>
        <div className="text-first bg-second rounded-lg flex items-center justify-center mt-10 mb-5 py-1">
          Funkcjonalności
        </div>
        <div className="flex flex-col gap-5">
          {features.map((feature) => (
            <SingleFeature feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePlan;
