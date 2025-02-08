import React from "react";
import Location from "./Location";
import ProjectsReady from "./ProjectsReady";

const IntroText = () => {
  return (
    <div className="font-[Inter] max-w-3xl">
      <h1 className="text-5xl lg:text-6xl xl:text-6xl font-bold mt-10">
        Kacper Wolański
      </h1>
      <h2 className="xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-extralight mb-2">
        Strony Internetowe
      </h2>
      <p className="font-light mt-2sdbvojsdv">
        Cześć! Tworzę estetyczne strony i aplikacje, które pomagają firmom
        wyróżnić się w sieci. Pracowałem nad wieloma projektami - od małych
        stron wizytówek po rozbudowane aplikacje internetowe.
      </p>
      <div className="flex flex-col gap-2 mt-10">
        <Location />
        <ProjectsReady />
      </div>
    </div>
  );
};

export default IntroText;
