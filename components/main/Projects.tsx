import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { My_Projects } from "@/constants";
import ProjectModal from "../sub/ProjectModal";

interface Technology {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface Card {
  src: string;
  title: string;
  description: string;
  image: string;
  subDescription: string;
  tech: Technology[];
}

const Projects: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const openModal = (index: number) => {
    setSelectedCard(My_Projects[index]);
    setOpen(true);
  };

  const closeModal = (): void => {
    setSelectedCard(null);
    setOpen(false);
  };

  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-between min-h-screen pb-20 px-5"
    >
      <h1 className="text-7xl med:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20">
        Projects
      </h1>

      <div className="flex items-center">

      <div className="flex flex-row flex-wrap gap-20 items-center justify-center max-w-[70rem]">
        {My_Projects.map((card, i) => (
          <div key={i}
          className="cursor-pointer"
          onClick={() => openModal(i)}
          >
            <ProjectCard
              src={card.src}
              title={card.title}
              description={card.description}
              subDescription={card.subDescription}
              tech={card.tech}
            />
          </div>
        ))}
      </div>
      </div>

      {open && selectedCard && (
        <ProjectModal selectedCard={selectedCard} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Projects;
