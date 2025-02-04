import Image from "next/image";
import Javascript from "./JavaScript.svg";
import Typescript from "./Typescript.svg";
import React from "./React.svg";
import NestJS from "./NestJS.svg";
import PostgreSQL from "./Postgresql.svg";
import WordPress from "./Wordpress.svg";
import Github from "./Github.svg";
import NextJS from "./NextJS.svg";
import Figma from "./Figma.svg";
import Tailwind from "./Tailwind.svg";
import MaterialUI from "./MaterialUI.svg";

export const JavascriptIcon = () => <Image src={Javascript} alt="JavaScript" />;
export const TypescriptIcon = () => <Image src={Typescript} alt="TypeScript" />;
export const ReactIcon = () => <Image src={React} alt="React" />;
export const NestJSIcon = () => <Image src={NestJS} alt="NestJS" />;
export const PostgreSQLIcon = () => <Image src={PostgreSQL} alt="PostgreSQL" />;
export const WordPressIcon = () => <Image src={WordPress} alt="WordPress" />;
export const GitHubIcon = () => <Image src={Github} alt="GitHub" />;
export const NextJSIcon = () => <Image src={NextJS} alt="Next.js" />;
export const FigmaIcon = () => <Image src={Figma} alt="Figma" />;
export const TailwindIcon = () => <Image src={Tailwind} alt="Tailwind CSS" />;
export const MaterialUIIcon = () => (
  <Image src={MaterialUI} alt="Material UI" />
);
