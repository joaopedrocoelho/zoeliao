"use client";
import React from "react";
import H1 from "./text/H1";
import Accordion from "./Accordion";
import SectionWrapper from "./SectionWrapper";

const Services = () => {
  const [openIdx, setOpenIdx] = React.useState(Infinity);

  return (
    <SectionWrapper>
      <div className="flex flex-col w-full">
        <H1>Services</H1>
        <ul className="pt-12">
          <li>
            <Accordion
              summary="
            Social Media Management
          "
              details="Our Social Media Management Service is the day-to-day running of your social media accounts, where we implement your custom social media strategy and aesthetic all in one place. We specialize in Instagram, TikTok, Pinterest, and LinkedIn."
              open={openIdx === 0}
              onClick={() => {
                openIdx === 0 ? setOpenIdx(Infinity) : setOpenIdx(0);
              }}
            />
          </li>
          <li>
            <Accordion
              summary="
            Social Media Management
          "
              details="Our Social Media Management Service is the day-to-day running of your social media accounts, where we implement your custom social media strategy and aesthetic all in one place. We specialize in Instagram, TikTok, Pinterest, and LinkedIn."
              open={openIdx === 1}
              onClick={() => {
                openIdx === 1 ? setOpenIdx(Infinity) : setOpenIdx(1);
              }}
            />
          </li>

          <li>
            <Accordion
              summary="
            Social Media Management
          "
              details="Our Social Media Management Service is the day-to-day running of your social media accounts, where we implement your custom social media strategy and aesthetic all in one place. We specialize in Instagram, TikTok, Pinterest, and LinkedIn."
              open={openIdx === 2}
              onClick={() => {
                openIdx === 2 ? setOpenIdx(Infinity) : setOpenIdx(2);
              }}
            />
          </li>
          <li>
            <Accordion
              summary="
            Social Media Management
          "
              details="Our Social Media Management Service is the day-to-day running of your social media accounts, where we implement your custom social media strategy and aesthetic all in one place. We specialize in Instagram, TikTok, Pinterest, and LinkedIn."
              open={openIdx === 3}
              onClick={() => {
                openIdx === 3 ? setOpenIdx(Infinity) : setOpenIdx(3);
              }}
            />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Services;
