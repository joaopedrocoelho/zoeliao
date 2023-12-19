"use client";
import React from "react";
import { PiCaretDownThin } from "react-icons/pi";
import { raleway } from "./RalewayFont";

interface AccordionProps {
  details: string;
  summary: string;
  open: boolean;
  onClick: () => void;
}

const Accordion = ({ details, summary, open, onClick }: AccordionProps) => {
  return (
    <details
      open={true}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`lg:max-w-[500px] ${raleway.className}`}
    >
      <summary
        className="flex 
      justify-between 
      items-center
      capitalize cursor-pointer 
      px-6 py-6 border-b-[1px] 
      border-b-slate-200
      lg:border-0
      lg:justify-start
      lg:gap-x-4
      lg:text-xl
      lg:font-medium
 "
      >
        {summary}
        <PiCaretDownThin
          size="1.5rem"
          className="stroke-slate-800"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </summary>
      <div
        style={{
          transition: "max-height 0.5s ease",
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
        }}
      >
        <p
          className="px-6 py-8 font-light text-lg leading-8"
          style={{
            transition: "opacity 0.6s ease-in-out",
            transitionDelay: "0.5s",
            opacity: open ? 1 : 0,
          }}
        >
          {details}
        </p>
      </div>
    </details>
  );
};

export default Accordion;
