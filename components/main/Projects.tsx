import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center pb-40 h-screen"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="lorem ipsum dolor siuts nnana mss"
        />

        <ProjectCard
          src="/CardImage.png"
          title="interactive website cards"
          description="lorem ipsum dolor siuts nnana mss"
        />

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space themed website"
          description="lorem ipsum dolor siuts nnana mss"
        />
      </div>
    </div>
  );
};

export default Projects;
