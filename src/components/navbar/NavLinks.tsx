import React from "react";
import { raleway } from "../RalewayFont";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul
      className={`
    ${raleway.className}
    text-3xl
    font-thin
    
    flex 
    flex-col 
    justify-center 
    w-full 
    h-full
    items-center 
    py-8 gap-y-4
    lg:flex-row
    lg:gap-x-6
    lg:py-0
    lg:justify-end
    lg:pr-4
    lg:text-xl
    lg:font-light
    `}
    >
      <li>
        <Link href="#services">Services</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#projects">Projects</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
