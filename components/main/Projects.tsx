import React, { useState } from "react";
import CardProject from "../sub/CardProject";
import { My_Projects } from "@/constants";
import ProjectModal from "../sub/ModalProject";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import {slideInFromLeft, slideInFromTop} from "@/utils/motion"

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
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-5 w-full "
    >
      <div className="circleP absolute blur-[180px] dark:blur-[140px] opacity-30 dark:opacity-10 top-60 rounded-full w-[40%] h-[70%]"></div>
      <div className="flex flex-col items-center justify-center space-y-16">
     
        <div className="w-full">
          <h3 className="text-5xl py-2 text-center med:text-3xl font-semibold text-primary">
            Recent Projects
          </h3>
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
              <CardProject
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
          <Link href="/profile" className="w-32 hover:bg-accent flex items-center justify-center rounded-lg h-8 transition-colors duration-300">
            <button             
              className="flex space-x-3 text-blue-500 items-center "
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
