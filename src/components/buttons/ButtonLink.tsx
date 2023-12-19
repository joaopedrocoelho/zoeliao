import React from "react";
import { raleway } from "../RalewayFont";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const ButtonLink = ({ children, ...attributes }: ButtonProps) => {
  return (
    <a
      {...attributes}
      className={`
      ${raleway.className}
      border-[1px]
      border-darkgreen
      px-6 py-4 
      text-sm 
      font-medium 
      text-darkgreen
      shadow-sm 
      hover:bg-white/30
      focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 
      focus-visible:outline-green-100
      cursor-pointer`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
