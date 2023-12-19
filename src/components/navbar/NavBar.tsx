"use client";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import BurgerMenuIcon from "./burgerMenu/BurgerMenuIcon";
import NavLinks from "./NavLinks";

const ralewayThin = Raleway({
  weight: "variable",
  subsets: ["latin"],
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col h-full     border-b-[1px]">
      <div
        className="flex 
    justify-between 
    bg-slate-50 
    py-6 items-center 
    px-4

    border-slate-200
    w-full"
      >
        <h2
          className={`${ralewayThin.className} font-thin w-full text-4xl text-slate-800`}
        >
          Zoe Liao
        </h2>
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BurgerMenuIcon />
        </button>
      </div>
      <div
        className="flex overflow-hidden flex-col"
        style={{
          transition: "max-height 0.5s ease-in-out",
          maxHeight: isOpen ? "300px" : "0",
        }}
      >
        <NavLinks />
      </div>
    </header>
  );
};

export default NavBar;
