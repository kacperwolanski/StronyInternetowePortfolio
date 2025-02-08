import React from "react";
import { Project } from "../types";
import { SearchIcon } from "@/app/shared/assets/otherIcons";
import Image from "next/image";

interface Props {
  project: Project;
}
const SingleProject = ({ project }: Props) => {
  const { desktopImage, title, description, linkToProject } = project;

  return (
    <div className="z-10 text-first font-[Inter] max-w-xl flex flex-col justify-between">
      <header className="font-semibold text-2xl mb-2 text-center">
        {title}
      </header>
      <p className="font-light mb-5 ">{description}</p>
      <div className="flex justify-between relative">
        <a
          href={linkToProject}
          target="_blank"
          rel="noopener noreferrer"
          className=" w-full"
        >
          <div className="mockup-browser bg-first border w-full opacity-60 hover:opacity-100 hover:cursor-pointer transition-opacity duration-500">
            <div className="mockup-browser-toolbar w-full">
              <div className="btn btn-outline font-light flex items-center gap-2 hover:text-gray-400 hover:bg-gray-200">
                <SearchIcon />
                {linkToProject}
              </div>
            </div>
            <div className="bg-second relative w-full min-h-[400px]">
              <Image
                src={desktopImage}
                alt="desktop image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
