import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="px-4 pt-16 w-full lg:px-20
    lg:first-of-type:pt-0
    lg:first-of-type:px-0"
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
