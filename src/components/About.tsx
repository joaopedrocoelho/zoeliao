import React from "react";
import SectionWrapper from "./SectionWrapper";
import H1 from "./text/H1";
import { raleway, ralewayItalic } from "./RalewayFont";
import P from "./text/P";

const About = () => {
  return (
    <SectionWrapper>
      <H1>About</H1>
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
            Hi! My name is Zoe! I&apos;m a social media manager based in Taiwan.
          </p>
          <P>
            I am a software engineer with a passion for building beautiful and
            functional websites. I am a recent graduate of the University of
            California, Berkeley with a Bachelors of Arts in Computer Science.
          </P>
          <P>
            I have experience working with React, Next.js, TypeScript,
            JavaScript, HTML, CSS, and Python. I am currently looking for
            full-time opportunities in software engineering.
          </P>
          <P>
            I am also a freelance social media manager and content creator. I
            specialize in Instagram, TikTok, Pinterest, and LinkedIn. I have
            experience working with Canva, Adobe Photoshop, and Adobe Lightroom.
          </P>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
