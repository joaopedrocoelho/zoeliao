"use client";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import BurgerMenuIcon from "./burgerMenu/BurgerMenuIcon";
import NavLinks from "./NavLinks";

const ralewayThin = Raleway({
  weight: "variable",
  subsets: ["latin"],
});

const NavBar = () => {
  const mediaMatch = window.matchMedia("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(false);

  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return (
    <header className="flex flex-col h-full lg:flex-row lg:w-full border-b-[1px]">
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
          className="block lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BurgerMenuIcon />
        </button>
      </div>
      <div
        className="flex overflow-hidden flex-col w-full"
        style={{
          transition: "max-height 0.5s ease-in-out",
          maxHeight: isOpen ? "300px" : matches ? "100vh" : "0",
        }}
      >
        <NavLinks />
      </div>
    </header>
  );
};

export default NavBar;
