import React from "react";
import SectionWrapper from "./SectionWrapper";
import H1 from "./text/H1";
import { raleway, ralewayItalic } from "./RalewayFont";
import P from "./text/P";

const About = () => {
  return (
    <SectionWrapper>
      <H1 id="about">About</H1>
      <div
        className="w-full flex flex-col 
        lg:grid 
        lg:grid-cols-[1.3fr,1fr]"
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
          🦀
        </span>
        <div className="lg:px-4">
          <p
            className={`${ralewayItalic.className} 
          text-[28px] 
          font-extralight
          pt-12
          lg:pt-0
          pb-3
          italic`}
          >
            {
              "Hey there, I'm Zoe, your go-to Social Media Management Specialist."
            }
          </p>
          <P>
            Throughout my career in the creative field, I have had the
            opportunity to work across various products and industries, gaining
            valuable experience in market research, branding, digital marketing,
            blog writing and more.
          </P>
          <P>
            {`One of the cool things about my journey is that I've had the privilege of working in both 
          Asian and Western markets for over 5 years, whether it's with big-name companies or pursuing my own projects.`}
          </P>
          <P>
            I am a native Mandarin speaker, and English is my second language,
            in which I am fluent. Additionally, I am currently in the process of
            learning Portuguese, which will be my third language. My linguistic
            abilities span a diverse spectrum, enabling me to effectively
            communicate and connect with individuals from various backgrounds
            and cultures.
          </P>
          <P>
            {`
            So, if you're on the lookout for someone to boost your brand, 
            fit right into your team, or simply share some exciting ideas, let's connect! 
            I'm all about making meaningful connections and creating magic together!
            `}
          </P>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
