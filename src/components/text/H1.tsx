import React from "react";
import { raleway } from "../RalewayFont";

interface props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const H1 = ({ children, ...attributes }: props) => {
  return (
    <h1
      className={`${raleway.className} font-normal text-5xl w-full  sm:text-6xl`}
      {...attributes}
    >
      {children}
    </h1>
  );
};

export default H1;
