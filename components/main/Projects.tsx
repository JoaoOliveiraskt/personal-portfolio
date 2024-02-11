import React, { useState } from "react";
import ProjectCard from "../sub/CardProject";
import { My_Projects } from "@/constants";
import ProjectModal from "../sub/ModalProject";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

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
      className="relative flex flex-col items-center justify-center min-h-screen pb-20 px-5 w-full "
    >
      <div className="circle absolute opacity-10 top-60 rounded-full w-[40%] h-[70%]"></div>
      <div className="flex flex-col items-center justify-center space-y-10">
     
        <div className="w-full">
          <h1 className="text-5xl p-1 text-center med:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-darkTitle to-lightBg">
            Projects
          </h1>
        </div>

        <div
          id="cards"
          className="flex flex-row flex-wrap items-center justify-center gap-16 max-w-[70rem]"
        >
          {My_Projects.slice(0, 2).map((card, i) => (
            <div
              id="card"
              key={i}
              className="cursor-pointer "
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
          <Link href="/profile" className="w-32 hover:bg-linkHover flex items-center justify-center rounded-lg h-8 transition-colors duration-300">
            <button             
              className="flex space-x-3 text-blue-400 items-center "
            >
              <span className="">See more</span>
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
