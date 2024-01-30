import Image from "next/image";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

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
    description: string;
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
    <div className="z-50 fixed left-0 right-0 top-0 bottom-0 bg-[#00000074] flex items-center justify-center">
      <div className="z-50 projectModalBg p-1 mx-5 overflow-hidden fixed max-w-[70rem] h-auto  flex flex-col items-center justify-between rounded-xl border border-zinc-700">
      <div className="border-2 border-zinc-800 rounded-xl overflow-hidden w-full h-full">
       <div className="w-full h-auto">
       <Image
          src={selectedCard?.src}
          alt={selectedCard?.title}
          width={500}
          height={300}
          className="w-full object-contain"
        />
       </div>
        <div className="flex flex-col px-5 py-8 w-full h-full">
          <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-5">

          <h1 className="flex gap-10 tracking-tighter text-2xl font-semibold text-zinc-200">
            {selectedCard?.title}
            <div className="text-white flex items-center gap-4">
              {selectedCard?.tech.map((technology, index) => (
                <Image
                  key={index}
                  src={technology.src}
                  alt={technology.name}
                  width={technology.width}
                  height={technology.height}
                />
              ))}
            </div>
          </h1>

          <div className="text-white flex items-center justify-center gap-5">
          <button
            title="Website"
            className="w-9 h-9 text-2xl hover:bg-[#434343b3] rounded-lg p-1 flex items-center justify-center"
          >
            <a href="https://long-trips.vercel.app">
              <HiArrowTopRightOnSquare />
            </a>
          </button>
          <button
            onClick={closeModal}
            title="Close"
            className=" text-zinc-200 text-3xl hover:bg-[#434343b3] w-9 h-9 flex items-center justify-center rounded-lg p-1"
          >
            <IoIosCloseCircle />
          </button>
        </div>
          </div>
          <p className="tracking-widest mt-5 text-zinc-400 max-w-[35rem]">
            {selectedCard?.subDescription}
          </p>
        </div>

      </div>
      </div>
    </div>
  );
};

export default ProjectModal;
