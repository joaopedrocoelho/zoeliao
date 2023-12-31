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
  // const mediaMatch = window.matchMedia("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(false);

  // const [matches, setMatches] = useState(mediaMatch.matches);

  // useEffect(() => {
  //   const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
  //   mediaMatch.addListener(handler);
  //   return () => mediaMatch.removeListener(handler);
  // });

  return (
    <header
      className="flex flex-col h-full lg:flex-row lg:w-full
     border-b-[1px] 
     border-beige-darkest
    bg-beige-darker
    lg:bg-transparent
    lg:border-none"
    >
      <div
        className="flex 
    justify-between 
    py-6 items-center 
    px-4
  
    w-full"
      >
        <h2 className={`${ralewayThin.className} font-thin w-full text-4xl `}>
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
        className={`nav flex overflow-hidden flex-col w-full
          lg:max-h-screen
        `}
        style={{
          transition: "max-height 0.5s ease-in-out",
          maxHeight: isOpen ? "100vh" : "0px",
        }}
      >
        <NavLinks />
      </div>
    </header>
  );
};

export default NavBar;
