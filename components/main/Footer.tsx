import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-5 pt-32 pb-5">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="tracking-wider min-w-[200px] h-auto flex flex-col items-center justify-center">
          <div className="font-bold text-[16px]">SocialMedia</div>
          <div className="flex flex-row items-center my-[15px] cursor-pointer">
            <RxLinkedinLogo />
            <span className="ml-[6px]">Linkedin</span>
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
