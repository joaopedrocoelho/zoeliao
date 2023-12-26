"use client";
import React from "react";
import H1 from "./text/H1";
import { AccordionComponent } from "./Accordion";
import SectionWrapper from "./SectionWrapper";

const Services = () => {
  const [openIdx, setOpenIdx] = React.useState(Infinity);

  return (
    <SectionWrapper>
      <H1 id="services">Services</H1>
      <div
        className="flex flex-col
       w-full items-center
       lg:grid 
      lg:grid-cols-[1.3fr,1fr]
     "
      >
        <span
          className="text-[200px]
            m-auto
        lg:flex 
        lg:items-center 
        lg:justify-center 
        lg:bg-green-100 
        lg:w-full 
        lg:h-full"
        >
          🐙
        </span>

        <ul className="pt-12 lg:order-first lg:mx-auto">
          <li>
            <AccordionComponent.Accordion
              summary="
            Social Media Management
          "
              open={openIdx === 0}
              onClick={() => {
                openIdx === 0 ? setOpenIdx(Infinity) : setOpenIdx(0);
              }}
            >
              <AccordionComponent.DetailsParagraph open={openIdx === 0}>
                <div className="flex flex-col gap-y-4">
                  <p>{`Unlock the full potential of your brand's social    
        media presence with our tailored Social Media Management services. We specialize 
        in crafting engaging strategies and aesthetics for Instagram, Pinterest and Facebook. 
        Our meticulously designed packages encompass a wide range of essential services to supercharge your digital presence:
            `}</p>
                  <ul className="list-disc list-inside">
                    <li>Social Media Audit & Strategy</li>
                    <li>Monthly Content Planning & Scheduling</li>
                    <li>Feed Planning</li>
                    <li>Graphic Design</li>
                    <li>Caption & Hashtags</li>
                    <li>Keyword Research/Optimization</li>
                    <li>New Product Launch Plan</li>
                    <li>Stories Creation</li>
                    <li>Monthly In-Depth Analytics</li>
                  </ul>
                </div>
              </AccordionComponent.DetailsParagraph>
            </AccordionComponent.Accordion>
          </li>
          <li>
            <AccordionComponent.Accordion
              summary="
            Pinterest Management
          "
              open={openIdx === 1}
              onClick={() => {
                openIdx === 1 ? setOpenIdx(Infinity) : setOpenIdx(1);
              }}
            >
              <AccordionComponent.DetailsParagraph open={openIdx === 1}>
                <div className="flex flex-col gap-y-4">
                  <p>{`Ever wondered why Pinterest dances to its own beat? 
                  It's because Pinterest isn't just a social media platform – 
                  it's a search engine for inspiration! Welcome to our Pinterest Management, 
                  where we offer a delightful 'hands-off' experience that lets you sit back and enjoy the magic!
            `}</p>
                  <ul className="list-disc list-inside">
                    <li>Pinterest Audit & Strategy</li>
                    <li>Template Curation</li>
                    <li>New Account Setup & Optimization</li>
                    <li>SEO-Powered Profile</li>
                    <li>Niche-Specific Boards</li>
                    <li>Fresh Pins Every Month</li>
                    <li>Optimized Titles & Descriptions</li>
                    <li>Monthly In-Depth Analytics</li>
                  </ul>
                </div>
              </AccordionComponent.DetailsParagraph>
            </AccordionComponent.Accordion>
          </li>
          <li>
            <AccordionComponent.Accordion
              summary="
            Blog Writer
          "
              open={openIdx === 2}
              onClick={() => {
                openIdx === 2 ? setOpenIdx(Infinity) : setOpenIdx(2);
              }}
            >
              <AccordionComponent.DetailsParagraph open={openIdx === 2}>
                <div className="flex flex-col gap-y-4">
                  <p>{`Unlock the SEO-boosting power of your brand with our 
                  customized Blog Writing services. 
                  We excel at creating engaging narratives that resonate with your audience.
                   From thought-provoking articles to informative pieces, our tailored blogs help with SEO by enhancing your online presence and driving engagement.
            `}</p>
                </div>
              </AccordionComponent.DetailsParagraph>
            </AccordionComponent.Accordion>
          </li>
          <li>
            <AccordionComponent.Accordion
              summary="
            Content Creation
          "
              open={openIdx === 3}
              onClick={() => {
                openIdx === 3 ? setOpenIdx(Infinity) : setOpenIdx(3);
              }}
            >
              <AccordionComponent.DetailsParagraph open={openIdx === 3}>
                <div className="flex flex-col gap-y-4">
                  <p>{`
                  Is your business craving captivating content but short on resources? 
                  Look no further – we're here to bring your vision to life! 
                  Introducing our Content Creation service, your one-stop solution for all your content needs. 
                  Whether you're seeking a partner to film exceptional footage or craft compelling visuals,
                   we've got you covered. Seamlessly integrated with our Social Media Management packages,
                    or available as a standalone service, our Content Creation service ensures you're always 
                    armed with the perfect content for your projects.

            `}</p>
                </div>
              </AccordionComponent.DetailsParagraph>
            </AccordionComponent.Accordion>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Services;
