import React from "react";
import SectionWrapper from "./SectionWrapper";
import H1 from "./text/H1";
import MansoryGrid from "./projects/MansoryGrid";

const Projects = () => {
  return (
    <SectionWrapper>
      <H1 id="projects">Projects</H1>
      <div className="pt-12">
        <MansoryGrid />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
