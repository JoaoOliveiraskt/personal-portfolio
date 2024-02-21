"use client";

import { My_Projects } from "@/constants";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import ProfileHeader from "@/components/sub/ProfileHeader";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <main className="bg-card pt-2 med:pt-5 min-h-screen w-full flex flex-col items-center">
      <div className="w-[37rem] min-h-screen med:w-full flex flex-col gap-8">
        <ProfileHeader />

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-zinc-50 tracking-wider antialiased px-4">
              Featured Projects
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            {My_Projects.map((project, index) => (
              <a
                href={project.src}
                target="_blank"
                key={index}
                className="hover:bg-accent rounded-lg p-4 transition-all duration-300 ease-in-out"
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
                      <p className="text-zinc-400 font-extralight text-sm tracking-wide">
                        {project.caption}
                      </p>
                    </div>
                  </div>
                  <div>
                    <GoArrowUpRight className="text-zinc-400"/>
                  </div>
                </div>
              </a>
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
    </main>
  );
}
