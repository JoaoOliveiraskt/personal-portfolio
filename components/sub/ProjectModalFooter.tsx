// ProjectModalFooter.tsx
import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { ProjectModalProps } from "@/components/sub/ProjectModal";

interface ProjectModalFooterProps {
  closeModal: () => void;
  selectedCard: ProjectModalProps["selectedCard"];
}

const ProjectModalFooter: React.FC<ProjectModalFooterProps> = ({
  closeModal,
  selectedCard,
}: ProjectModalFooterProps) => {
  const websiteUrl = selectedCard ? selectedCard.src : "";

  return (
    <div className="text-primary flex items-center gap-5">
      <button className="hover:bg-accent rounded-lg p-2 flex items-center justify-center border transition-colors ">
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 items-center justify-center text-sm"
        >
          Website
          <div className="text-lg">
            <HiArrowTopRightOnSquare />
          </div>
        </a>
      </button>
      <button
        onClick={closeModal}
        title="Close"
        className="text-primary text-3xl hover:bg-accent w-9 h-9 flex items-center justify-center rounded-lg p-1"
      >
        <IoIosCloseCircle />
      </button>
    </div>
  );
};

export default ProjectModalFooter;
