import React from "react";
import SkillsDataProvider from "./SkillsItems";
import { Frontend_skill } from "@/constants";
import Divider from "../ui/divider";

function SliderInfinite() {
  return (
    <div
      id="logosContainer"
      className="w-full overflow-x-hidden flex flex-col items-center"
    >
      <div className="flex items-center justify-center flex-wrap gap-6 leading-none">
        {Frontend_skill.map((image, index) => (
          <div
            key={index}
            className="flex w-28 sm:w-20 flex-col py-6 items-center justify-center gap-5 hover:-translate-y-1 transition-all duration-200 transform"
          >
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              background={image.backgroundColor}
            />
            <p className="text-primary sm:text-xs font-semibold">
              {image.skill_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderInfinite;
