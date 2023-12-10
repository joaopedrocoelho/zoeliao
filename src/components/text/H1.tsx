import React from "react";
import { raleway } from "../RalewayFont";

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className={`${raleway.className} font-light text-5xl w-full text-gray-900 sm:text-6xl`}
    >
      {children}
    </h1>
  );
};

export default H1;
