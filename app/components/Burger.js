import React from "react";
import Menu from "./Menu";

const Burger = ({ open, setOpen }) => {
  return (
    <>
      <div
        className="hidden relative w-6 cursor-pointer z-50 h-5 sm:flex flex-col justify-around -top-2 mr-5"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-auto h-2px rounded-md bg-mainbrand transition-all ease-in-out delay-150 ${
            open ? "rotate-45 -translate-x-3 translate-y-1" : "rotate-0"
          }`}
        ></span>
        <span
          className={`w-4 h-2px bg-mainbrand rounded-md transition-all ease-in-out delay-150 ${
            open ? "translate-x-full opacity-0" : "translate-x-0 opacity-95"
          }`}
        ></span>
        <span
          className={`w-auto h-2px bg-mainbrand rounded-md transition-all ease-in-out delay-150 ${
            open ? "-rotate-45 -translate-x-3 -translate-y-2 -mt-1" : "rotate-0"
          }`}
        ></span>
      </div>

      {/* Menu */}
      <div
        className={`hidden sm:flex overflow-y-scroll overflow-x-hidden fixed h-extra bg-hero-color py-5 px-6 w-full top-16 left-0 z-30 transition-all ease-in-out delay-150 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Menu />
      </div>
    </>
  );
};

export default Burger;
