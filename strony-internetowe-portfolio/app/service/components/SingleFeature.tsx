import { CheckIcon, CircledCrossIcon } from "@/app/shared/assets/otherIcons";
import React from "react";

export interface SingleFeatureType {
  isIncluded: boolean;
  title: string;
}

interface Props {
  feature: SingleFeatureType;
}
const SingleFeature = ({ feature }: Props) => {
  const { isIncluded, title } = feature;
  const icon = isIncluded ? <CheckIcon /> : <CircledCrossIcon />;
  const className = isIncluded
    ? "text-first font-semibold"
    : "text-second font-light";
  return (
    <div className="flex gap-5 items-center text-lg">
      {icon}
      <p className={className} style={{ textAlign: "left", width: "100%" }}>
        {title}
      </p>
    </div>
  );
};

export default SingleFeature;
