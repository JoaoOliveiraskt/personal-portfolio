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
    <header className="fixed px-4 inset-x-0 w-[100%] h-16 z-[100] sm:px-2">
      <nav className="relative flex w-full h-full items-center justify-center space-x-8 sm:space-x-1">
        <a
          href="#hero"
          className="absolute left-16 cursor-pointer h-auto w-auto flex items-center"
        >
          <span className="font-bold tracking-widest text-xl med:hidden">
            Oliveira
          </span>
        </a>

        <div className="h-10 flex flex-row items-center space-x-3 sm:space-x-1 max-w-[600px] sm:w-full px-1 backdrop-blur-[250px] border rounded-xl">
          <div className="flex text-base items-center space-x-5 sm:space-x-0 w-full h-auto text-text">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="flex items-center justify-center cursor-pointer px-4 h-8 hover:bg-accent rounded-lg hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/profile"
              className="flex items-center justify-center cursor-pointer px-4 h-8 hover:bg-accent rounded-lg hover:text-foreground transition-colors duration-300"
            >
              <span> Profile</span>
            </Link>
          </div>

          <div className="cursor-pointer flex flex-row gap-2 med:hidden transition-colors ">
            {Socials.map((social, index) => (
              <a href={social.link} 
              key={index}
              target="_blank"
              >
                <SocialIcon
                  Icon={social.icon}
                  hoverColor={social.hoverColor}
                  name={social.name}
                />
              </a>
            ))}
          </div>

          <StaggeredDropDown />
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}
