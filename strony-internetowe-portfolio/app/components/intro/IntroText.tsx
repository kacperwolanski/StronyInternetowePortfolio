import React from "react";
import Location from "./Location";
import ProjectsReady from "./ProjectsReady";

const IntroText = () => {
  return (
    <div className="font-[Inter]">
      <h1 className="text-6xl font-bold mt-10 font-[Inter] ">
        Kacper Wolański
      </h1>
      <h2 className="text-2xl font-extralight mt-3">Strony Internetowe</h2>
      <p className="font-light mt-2">
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
