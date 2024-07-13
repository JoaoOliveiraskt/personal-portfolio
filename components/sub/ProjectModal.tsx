import Image from "next/image";
import React from "react";
import ProjectModalFooter from "./ProjectModalFooter";

interface Technology {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface ProjectModalProps {
  selectedCard: {
    src: string;
    photo: string;
    title: string;
    description: string;
    tech: Technology[];
  } | null;
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  selectedCard,
  closeModal,
}) => {
  if (!selectedCard) {
    return null;
  }

  return (
    <div className="z-50 fixed inset-0 bg-[#00000074] flex items-center justify-center">
      <div className="bg-card overflow-hidden fixed max-w-[50rem] mx-2 h-auto flex flex-col items-center justify-between rounded-3xl border-2">
        <div className="overflow-hidden w-full h-full">
          <div className="w-full h-auto">
            <Image
              src={selectedCard.photo}
              alt={selectedCard.title}
              width={1000}
              height={300}
              
              className="w-full border-b"
            />
          </div>
          <div className="flex flex-col px-5 py-8 w-full h-full gap-5">
            <div className="flex med:flex-col gap-8 med:gap-2 sm:gap-3 w-full tracking-tighter text-2xl font-semibold sm:flex-wrap">
              <h3 className="text-primary">{selectedCard.title}</h3>
              <div className="text-primary flex items-center gap-4 flex-wrap">
                {selectedCard.tech.map((technology, index) => (
                  <Image
                    key={index}
                    src={technology.src}
                    alt={technology.name}
                    width={35}
                    height={35}
                    className='w-7 sm:w-5'
                  />
                ))}
              </div>
            </div>
            <p className="tracking-wide text-muted-foreground font-medium max-w-[35rem]">
              {selectedCard.description}
            </p>
            <ProjectModalFooter selectedCard={selectedCard} closeModal={closeModal}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
