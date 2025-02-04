import React from "react";

interface Tool {
  icon: JSX.Element;
  title: string;
}
interface Props {
  tool: Tool;
}
const Tool = ({ tool }: Props) => {
  const { icon, title } = tool;
  return (
    <div>
      {icon}
      <p className="font-light text-first">{title}</p>
    </div>
  );
};

export default Tool;
