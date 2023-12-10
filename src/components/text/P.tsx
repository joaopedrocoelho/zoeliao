import React from "react";
import { raleway, ralewayItalic } from "../RalewayFont";

const P = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={`${raleway.className} 
      font-normal 
      text-[17px] 
      leading-7 
      text-left
      py-3`}
    >
      {children}
    </p>
  );
};

export default P;
