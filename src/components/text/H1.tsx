import React from "react";
import { raleway } from "../RalewayFont";

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className={`${raleway.className} font-normal text-5xl w-full  sm:text-6xl`}
    >
      {children}
    </h1>
  );
};

export default H1;
