import Image from "next/image";
import React from "react";
import ProjectModalFooter from "./ProjectModalFooter";

interface Technology {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface ProjectModalProps {
  selectedCard: {
    src: string;
    title: string;
    subDescription: string;
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
    <div className="fixed inset-0 bg-[#00000074] flex items-center justify-center">
      <div className="projectModalBg p-1 mx-5 overflow-hidden fixed max-w-[70rem] h-auto flex flex-col items-center justify-between rounded-xl border border-zinc-700">
        <div className="border-2 border-zinc-800 rounded-xl overflow-hidden w-full h-full">
          <div className="w-full h-auto">
            <Image
              src={selectedCard.src}
              alt={selectedCard.title}
              width={500}
              height={300}
              className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col px-5 py-8 w-full h-full gap-5">
            <div className="flex items-center gap-10 sm:gap-3 w-full tracking-tighter text-2xl font-semibold text-zinc-200">
              {selectedCard.title}
              <div className="text-white flex items-center gap-4 sm:flex-wrap">
                {selectedCard.tech.map((technology, index) => (
                  <Image
                    key={index}
                    src={technology.src}
                    alt={technology.name}
                    width={technology.width}
                    height={technology.height}
                  />
                ))}
              </div>
            </div>
            <p className="tracking-widest text-zinc-400 max-w-[35rem]">
              {selectedCard.subDescription}
            </p>
            <ProjectModalFooter closeModal={closeModal}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
