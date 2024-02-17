"use client";

import Image from "next/image";
import React from "react";
import { Socials } from "@/constants";
import StaggeredDropDown from "../sub/StaggeredDropdown";
import Link from "next/link";
import { ModeToggle } from "../sub/theme-switcher";
import SocialIcon from "../sub/SocialIcon";

const links = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <header className="fixed bg-background xl:px-5 px-72 sm:px-4  inset-x-0 w-[100%] h-16  z-[100]">
      <nav className="relative flex w-full h-full items-center justify-between space-x-8 sm:space-x-1">
        <a
          href="#hero"
          className="cursor-pointer h-auto w-auto flex items-center"
        >
          <span className="font-bold tracking-widest text-xl">
            Oliveira
          </span>
        </a>

        <div className="h-12 flex flex-row items-center space-x-3 sm:space-x-1 max-w-[600px] sm:w-full px-1">
          <div className="flex  items-center space-x-20 sm:gap-5 w-full h-auto text-text">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="flex text-zinc-800 dark:text-zinc-400 text-sm med:hidden items-center justify-center cursor-pointer rounded-md hover:text-accent dark:hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/profile"
              className="flex text-zinc-800 dark:text-zinc-400 text-sm med:hidden items-center justify-center cursor-pointer  hover:text-accent dark:hover:text-foreground"
            >
              <span> Profile</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <ModeToggle />
          <StaggeredDropDown />
          <div className="cursor-pointer flex flex-row gap-2 med:hidden">
            {Socials.map((social, index) => (
              <a href={social.link} key={index} target="_blank">
                <SocialIcon
                  Icon={social.icon}
                  hoverColor={social.hoverColor}
                  name={social.name}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
