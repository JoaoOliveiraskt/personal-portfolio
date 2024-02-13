import React from "react";
import SkillsDataProvider from "./SkillsDataProvider";
import { Frontend_skill } from "@/constants";

function SliderInfinite() {
  return (
    <div id="logosContainer" className="w-full overflow-x-hidden">
      <div id="logos-slide" className="flex items-center justify-center space-x-32 sm:space-x-16">
        {Frontend_skill.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <p className="text-primary ">{image.skill_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderInfinite;
