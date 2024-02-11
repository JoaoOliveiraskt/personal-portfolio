"use client";

import Image from "next/image";
import React from "react";
import { Socials } from "@/constants";
import { motion } from "framer-motion";
import StaggeredDropDown from "../sub/StaggeredDropdown";
import Link from "next/link";
import {
  slideInFromTop,
} from "@/utils/motion";

export default function Header() {
  return (
    <motion.div variants={slideInFromTop} className="fixed max-w-[900px] h-12 top-4 right-0 left-0 m-auto px-3 z-40 header backdrop-blur-3xl border border-border rounded-full med:mx-5">
      <div className=" w-full h-full flex flex-row items-center justify-between">
        <a
          href="#hero"
          className="cursor-pointer h-auto w-auto flex flex-row items-center"
        >

          <span className="font-extralight tracking-widest text-2xl ml-[10px] text-darkText med:hidden">
            Oliveira
          </span>
        </a>

        <div className="tracking-wider text-sm w-[400px] px-2 h-full flex flex-row items-center justify-center sm:w-64 med:w-96">
          <div className="flex items-center justify-between w-full h-auto px-[6px] text-darkText sm:text-sm transition-colors">
            <a href="#skills" className="cursor-pointer hover:text-hoverDarkText transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-hoverDarkText transition-colors duration-300">
              Projects
            </a>
          <Link href="/profile" className="cursor-pointer hover:text-hoverDarkText transition-colors duration-300">
              Profile
         </Link>
          </div>
        </div>

        <StaggeredDropDown />

        <div className="cursor-pointer flex flex-row gap-2 med:hidden ">
          {Socials.map((social) => (
            <a target="blank" href={social.link} key={social.name}
            className="w-9 h-9 hover:bg-linkHover flex items-center justify-center rounded-lg transition-colors duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                title={social.name}
                width={18}
                height={18}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


