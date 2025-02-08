"use client";

import useIsMobileDevice from "@/app/hooks/useIsMobileDevice";
import React from "react";
import TopMenuMobile from "./components/TopMenuMobile";
import TopMenuDesktop from "./components/TopMenuDesktop";

const TopMenu = () => {
  const isMobileDevice = useIsMobileDevice();
  return (
    <div className="z-30 ">
      {isMobileDevice ? <TopMenuMobile /> : <TopMenuDesktop />}
    </div>
  );
};

export default TopMenu;
