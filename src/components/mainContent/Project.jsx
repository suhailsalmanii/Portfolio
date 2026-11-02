import React from "react";
import PageName from "./PageName";
import ProjectCard from "../projectCard/ProjectCard";

const Project = () => {
  return (
    <div>
      <div className="mt-24 sm:mt-30">
        <PageName name="Featured Project" icon="ri-layout-3-line" />
      </div>
      <div id="project" className="scroll-mt-24">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
