"use client";

import { My_Projects } from "@/constants";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import ProfileHeader from "@/components/sub/ProfileHeader";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BiExpand } from "react-icons/bi";
import ProjectModal from "@/components/sub/ModalProject";

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

export default function Profile() {
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
    <main className="dark:autBg bg-background pt-5 med:pt-5 min-h-screen w-full flex flex-col items-center">
      <div className="w-[37rem] min-h-screen med:w-full flex flex-col gap-8">
        <ProfileHeader />

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-primary tracking-wider antialiased px-4">
              Featured Projects
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            {My_Projects.map((project, index) => (
              <div 
                onClick={() => window.open(project.src, '_blank')}
                key={index}
                className=" cursor-pointer relative hover:bg-accent rounded-lg p-4 transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={44}
                        height={24}
                      />
                    </div>
                    <div>
                      <h2 className="font-extralight">{project.title}</h2>
                      <p className="text-text font-extralight text-sm tracking-wide">
                        {project.caption}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(index);
                      }}
                      title="Expand"
                      className="absolute isolate z-[50] right-12 text-xl hover:bg-background w-6 h-6 flex items-center justify-center rounded-lg border"
                    >
                      <BiExpand size={12} />
                    </button>
                    <GoArrowUpRight className="text-text" title="Website"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*<div className="flex justify-end">
            <Link
              href="/profile/projects"
              className="flex items-center mx-4 group"
            >
              <span className="">All projects</span>
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </Link>
          </div>*/}
        </div>
      </div>
      {open && selectedCard && (
        <ProjectModal selectedCard={selectedCard} closeModal={closeModal} />
      )}
    </main>
  );
}
