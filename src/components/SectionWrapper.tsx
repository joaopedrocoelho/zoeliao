import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-4 pt-16 w-full">{children}</div>;
};

export default SectionWrapper;
