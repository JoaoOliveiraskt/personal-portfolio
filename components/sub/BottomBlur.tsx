import React from "react";

const BottomBlur = () => {
  return (
    <div className="absolute rounded-full z-[-1] top-96 left-[24rem] ">
      <div className="absolute bg-[#0b355354] w-80 h-80 blur-3xl rounded-full z-[-1] top-20 left-16 xl:top-40"></div>
      <div className="absolute bg-[#15084954] w-80 h-80 blur-3xl rounded-full z-[-1] top-52 left-56 "></div>
    </div>
  );
};

export default BottomBlur;
