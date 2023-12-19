import React from "react";
import { raleway } from "../RalewayFont";

const NavLinks = () => {
  return (
    <ul
      className={`
    ${raleway.className}
    text-3xl
    font-thin
    bg-slate-50
    flex 
    flex-col 
    justify-center 
    w-full 
    h-full
    items-center 
    py-8 gap-y-4`}
    >
      <li>Services</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavLinks;
