import React from "react";
import { Socials } from "@/constants";

import {
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-5">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="tracking-wider min-w-[200px] h-auto flex flex-col items-center justify-center pb-24">
          <div className="font-bold text-[16px]">SocialMedia</div>
          <div className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxLinkedinLogo />
            <a href={Socials[0].link} >
            <span className="ml-[6px]">Linkedin</span>
            </a>
            
          </div>

          <div className="font-bold text-[16px]">About</div>
          <div className="flex flex-row items-center my-[15px] cursor-pointer">
            <span className="ml-[6px]">joaoliveiraam@gmail.com</span>
          </div>
          <div className="my-[20px] text-center">
            &copy; Built by João Victor Oliveira 2024.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
