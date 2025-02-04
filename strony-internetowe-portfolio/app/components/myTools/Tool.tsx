import React from "react";

interface Tool {
  icon: JSX.Element;
  title: string;
  link: string;
}

interface Props {
  tool: Tool;
}

const Tool = ({ tool }: Props) => {
  const { icon, title, link } = tool;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-4 max-w-20 text-center opacity-80 hover:opacity-100 transition-opacity"
    >
      <div className="w-12 h-12">{icon}</div>
      <p className="font-light text-first">{title}</p>
    </a>
  );
};

export default Tool;
