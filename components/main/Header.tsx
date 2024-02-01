"use client";

import Image from "next/image";
import React from "react";
import { Socials } from "@/constants";

import StaggeredDropDown from "../sub/StaggeredDropdown";
import Link from "next/link";
import Avatar from "../sub/Avatar";

const Header = () => {
  return (
    <div className="fixed max-w-[900px] h-14 top-4 right-0 left-0 m-auto px-3 z-40 bg-black border border-zinc-800 rounded-full med:mx-5">
      <div className=" w-full h-full flex flex-row items-center justify-between">
        <Link
          href="/"
          className="cursor-pointer h-auto w-auto flex flex-row items-center"
        >
          <div className="text-[#315694] text-2xl">
            <Avatar />
          </div>

          <span className="font-extralight tracking-widest text-2xl ml-[10px] text-zinc-300 med:hidden">
            Oliveira
          </span>
        </Link>

        <div className="tracking-wider text-sm w-[400px] px-2 h-full flex flex-row items-center justify-center sm:w-64 med:w-96">
          <div className="flex items-center justify-between w-full h-auto px-[6px] text-zinc-400 sm:text-sm transition-colors">
            <a href="#about-me" className="cursor-pointer hover:text-slate-50 transition-colors">
              About
            </a>
            <a href="#skills" className="cursor-pointer hover:text-slate-50 transition-colors">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-slate-50 transition-colors">
              Projects
            </a>
          </div>
        </div>

        <StaggeredDropDown />

        <div className="cursor-pointer flex flex-row gap-2 med:hidden ">
          {Socials.map((social) => (
            <a target="blank" href={social.link} key={social.name}
            className="w-9 h-9 hover:bg-[#434343b3] flex items-center justify-center rounded-lg transition-colors"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                title={social.name}
                width={18}
                height={18}
                className="text-white"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
