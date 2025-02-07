import React from "react";
import SectionSeparator from "../shared/components/SectionSeparator";
import ProcesList from "./components/ProcesList";
import PlansList from "./components/PlansList";
import HeaderButtonLink from "../shared/components/HeaderButtonLink";
import { contactPath } from "../appContacts";

const Service = () => {
  return (
    <div className="">
      <PlansList />
      <SectionSeparator
        title="Współpraca"
        subTitle="Od pomysłu do realizacji"
      />

      <ProcesList />
      <HeaderButtonLink
        title="Masz juz pomysł?"
        subtitle="Odezwij się do mnie i zacznijmy działać"
        buttonTitle="Kontakt"
        href={contactPath}
      />
    </div>
  );
};

export default Service;
