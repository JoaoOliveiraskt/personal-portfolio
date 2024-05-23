import React, { useState } from "react";
import { My_Projects } from "@/constants";
import ProjectModal from "../sub/ProjectModal";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectCard from "../sub/ProjectCard";
import { Button } from "../ui/button";
import Balancer from "react-wrap-balancer";

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
      className="flex flex-col items-center justify-center min-h-screen pb-4 px-3 w-full"
    >
      <div className="flex flex-col  items-center justify-center space-y-14 sm:space-y-6">
        <div className="max-w-[800px] mx-auto flex flex-col space-y-2 text-center">
          {/* Titúlo da sessão */}
          <h3 className="tracking-tighter text-4xl sm:text-3xl py-2 font-bold bg-gradient-to-r from-primary via-primary to-secondary text-transparent bg-clip-text">
            Projetos Recentes
          </h3>

          {/* Descrição da sessão */}
          <p className="tracking-wide leading-loose text-muted-foreground font-medium mx-auto">
            <Balancer>
              Veja os principais projetos que desenvolvi ao longo da minha
              jornada como programador. Para ver mais, visite{" "}
              <Link
                className="text-blue-600 hover:text-blue-400"
                href={"/profile"}
              >
                meu perfil
              </Link>{" "}
              ou confira meu{" "}
              <Link
                target="_blank"
                className="text-blue-600 hover:text-blue-400"
                href={"https://github.com/joaoOliveiraskt"}
              >
                Github
              </Link>
              .
            </Balancer>
          </p>
        </div>

        {/* Cards dos projetos */}
        <div className="flex flex-wrap items-center justify-center gap-16 med:gap-10 max-w-[52rem]">
          {My_Projects.slice(0, 2).map((card, i) => (
            <div
              key={i}
              className="cursor-pointer max-w-[52rem]"
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

        {/* Botão para ver mais */}
        <div className="w-full flex items-center justify-end">
          <Link href="/profile" className=" flex items-center justify-center">
            <Button
            size={"sm"}
              variant={"secondary"}
              className="flex space-x-3 items-center"
            >
              <span className="">Ver mais</span>
              <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal dos projetos */}
      {open && selectedCard && (
        <ProjectModal selectedCard={selectedCard} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Projects;
