import React from "react";
import { Raleway } from "next/font/google";
import BurgerMenuIcon from "./burgerMenu/BurgerMenuIcon";

const ralewayThin = Raleway({
  weight: "100",
  subsets: ["latin"],
});

const NavBar = () => {
  return (
    <header
      className="flex 
    justify-between 
    bg-slate-50 
    py-6 items-center 
    px-4
     border-b-[1px]
    border-slate-200
    w-full"
    >
      <h2 className={`${ralewayThin.className} w-full text-4xl text-slate-800`}>
        Zoe Liao
      </h2>
      <BurgerMenuIcon />
    </header>
  );
};

export default NavBar;
