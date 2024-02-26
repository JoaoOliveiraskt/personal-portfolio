"use client";

import React from "react";
import Balancer from "react-wrap-balancer";

const SkillText = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative text-center"
      >
        <div className="space-y-6 tracking-wider">
          <p className=" text-primary text-xl sm:text-base font-medium">
            <Balancer>Criando experiências digitais com...</Balancer>
            </p>
         
        </div>
      </div>
    </div>
  );
};

export default SkillText;
