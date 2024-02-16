import React, { useState } from "react";
import CardProject from "../sub/CardProject";
import { My_Projects } from "@/constants";
import ProjectModal from "../sub/ModalProject";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

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
      <div className="flex flex-col justify-center space-y-6">
        <div className="w-full">
          <h3 className="text-2xl py-2  med:text-2xl font-semibold text-primary">
            Recent Projects
          </h3>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-32 med:gap-10 max-w-[80rem]"
        >
          {My_Projects.slice(0, 2).map((card, i) => (
            <div
              key={i}
              className="cursor-pointer"
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
          <Link
            href="/profile"
            className="w-32 hover:bg-accent flex items-center justify-center rounded-lg h-8 transition-colors duration-300"
          >
            <button className="flex space-x-3 text-blue-500 items-center ">
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
