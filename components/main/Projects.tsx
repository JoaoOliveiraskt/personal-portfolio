import React, { useState } from "react";
import { My_Projects } from "@/constants";
import ProjectModal from "../sub/ProjectModal";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";

interface Technology {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface Card {
  src: string;
  title: string;
  caption: string;
  photo: string;
  description: string;

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
      className=" relative flex flex-col items-center justify-center min-h-screen pb-20 px-5 w-full"
    >
      <div className="flex flex-col justify-center space-y-14 sm:space-y-6">
        <div className="w-full">
          <h3 className="tracking-tight text-5xl text-center py-2 font-medium bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
            Projetos recentes
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-32 med:gap-10 max-w-[66rem]">
          {My_Projects.slice(0, 3).map((card, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() => openModal(i)}
            >
              <ProjectCard
                id={i}
                src={card.photo}
                title={card.title}
                caption={card.caption}
                description={card.description}
                tech={card.tech}
              />
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-end">
          <Link
            href="/profile"
            className="w-32 bg-button hover:bg-buttonHover dark:border border-buttonBorder flex items-center justify-center rounded-lg h-10 transition-colors duration-300"
          >
            <button className="flex space-x-3 items-center">
              <span className="">Ver mais</span>
              <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>

      {open && selectedCard && (
        <ProjectModal selectedCard={selectedCard} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Projects;
