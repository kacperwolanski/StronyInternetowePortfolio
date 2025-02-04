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
        I&apos;m a full stack developer (React.js & Node.js) with a focus on
        creating (and occasionally designing) exceptional digital experiences
        that are fast, accessible, visually appealing, and responsive. Even
        though I have been creating web applications for over 7 years, I still
        love it as if it was something new
      </p>
      <div className="flex flex-col gap-2 mt-10">
        <Location />
        <ProjectsReady />
      </div>
    </div>
  );
};

export default IntroText;
