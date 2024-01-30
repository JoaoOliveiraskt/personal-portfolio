import React from "react";

const BlurTop = () => {
  return (
    <div className="absolute rounded-full z-[-1] top-0 right-[30rem]">
      <div className="absolute bg-[#0b355354] w-80 h-80 blur-3xl rounded-full z-[-1] top-20 right-28 "></div>
      <div className="absolute bg-[#15084954] w-80 h-80 blur-3xl rounded-full z-[-1] top-52 right-0 "></div>
    </div>
  );
};

export default BlurTop;
