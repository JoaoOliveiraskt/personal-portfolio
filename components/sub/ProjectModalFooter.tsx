// ProjectModalFooter.tsx
import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";

interface ProjectModalFooterProps {
  closeModal: () => void;
}

const ProjectModalFooter: React.FC<ProjectModalFooterProps> = ({ closeModal }) => {
  return (
    <div className="text-white flex items-center gap-5">
      <button className="hover:bg-[#434343b3] rounded-lg p-2 flex items-center justify-center border border-zinc-800 transition-colors">
        <a href="https://long-trips.vercel.app" className="flex gap-3 items-center justify-center text-sm">
          Website
          <div className="text-lg">
            <HiArrowTopRightOnSquare />
          </div>
        </a>
      </button>
      <button
        onClick={closeModal}
        title="Close"
        className="text-zinc-200 text-3xl hover:bg-[#434343b3] w-9 h-9 flex items-center justify-center rounded-lg p-1"
      >
        <IoIosCloseCircle />
      </button>
    </div>
  );
};

export default ProjectModalFooter;
