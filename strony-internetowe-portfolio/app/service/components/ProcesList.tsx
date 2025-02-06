import { serviceProcess } from "@/app/shared/mappersData/serviceProces";
import React from "react";
import SingleProces from "./SingleProces";

const ProcesList = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {serviceProcess.map((service) => (
        <SingleProces key={service.title} service={service} />
      ))}
    </div>
  );
};

export default ProcesList;
