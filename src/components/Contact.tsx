import React from "react";
import H1 from "./text/H1";
import P from "./text/P";
import SectionWrapper from "./SectionWrapper";

export const Contact = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col px-4 py-12 w-full">
        <H1 id="Contact">Contact</H1>
        <div className="pt-12">
          <P>
            Congratulations! You are taking your first steps towards your dream
            socials and we can’t wait to be part of the journey. Please fill out
            the questionnaire below so we can find a time to schedule your
            discovery call. You’ll hear back from me within 48 hours. We can’t
            wait to meet you!
          </P>
        </div>
        <a
          href="mailto:zoeliao@gmail.com"
          className="flex w-full 
        mx-auto underline underline-offset-[6px]
        decoration-1 items-center 
        justify-center text-2xl 
        font-thin 
        py-4"
        >
          zoeliao@gmail.com
        </a>
      </div>
    </SectionWrapper>
  );
};
