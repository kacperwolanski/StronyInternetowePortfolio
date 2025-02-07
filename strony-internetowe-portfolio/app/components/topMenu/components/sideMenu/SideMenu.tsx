import React from "react";
import SideMenuContent from "./SideMenuContent";

const SideMenu = () => {
  return (
    <div className="drawer drawer-end z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end">
        <label htmlFor="my-drawer-4">
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay bg-transparent"
        ></label>
        <div className="menu bg-first text-base-content min-h-full xxs:min-w-80 xs:min-w-96 p-4 flex flex-col h-full">
          <SideMenuContent />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
