import React from "react";
import Image from "next/image";
import { raleway } from "./RalewayFont";
import H1 from "./text/H1";
import SectionWrapper from "./SectionWrapper";
import ButtonLink from "./buttons/ButtonLink";

const HeroBanner = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center">
        <span className="text-[200px]">🧝‍♀️</span>
        <div className="text-center w-full">
          <H1>Data to enrich your online business</H1>
          <p
            className={`${raleway.className} font-normal mt-6 text-lg leading-8 text-gray-600`}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div
            className={` ${raleway.className} mt-10 flex items-center justify-center gap-x-6`}
          >
            <ButtonLink>Get started</ButtonLink>
            <a href="#" className="text-sm font-medium leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroBanner;
