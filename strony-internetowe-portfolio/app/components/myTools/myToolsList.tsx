import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NestJSIcon,
  PostgreSQLIcon,
  WordPressIcon,
  GitHubIcon,
  NextJSIcon,
  FigmaIcon,
  TailwindIcon,
  MaterialUIIcon,
} from "@/app/shared/assets/techIcons";
import Tool from "./Tool";

export const myToolsList: Tool[] = [
  { icon: <JavascriptIcon />, title: "JavaScript" },
  { icon: <TypescriptIcon />, title: "TypeScript" },
  { icon: <ReactIcon />, title: "React" },
  { icon: <NestJSIcon />, title: "NestJS" },
  { icon: <PostgreSQLIcon />, title: "PostgreSQL" },
  { icon: <WordPressIcon />, title: "WordPress" },
  { icon: <GitHubIcon />, title: "GitHub" },
  { icon: <NextJSIcon />, title: "Next.js" },
  { icon: <FigmaIcon />, title: "Figma" },
  { icon: <TailwindIcon />, title: "Tailwind CSS" },
  { icon: <MaterialUIIcon />, title: "Material UI" },
];
