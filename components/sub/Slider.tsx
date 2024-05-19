import React from "react";
import SkillsDataProvider from "./SkillsDataProvider";
import { Frontend_skill } from "@/constants";

function SliderInfinite() {
  return (
    <div id="logosContainer" className="w-full overflow-x-hidden flex flex-col items-center">
      
      <div  className="flex items-center justify-around flex-wrap gap-16 med:gap-8 py-12 max-w-[60rem] border-t  border-border">
        {Frontend_skill.map((image, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-5 hover:-translate-y-1 transition-all duration-200 transform">
            <SkillsDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              background={image.backgroundColor}
            />
            <p className="text-primary sm:text-xs font-semibold">{image.skill_name}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default SliderInfinite;
