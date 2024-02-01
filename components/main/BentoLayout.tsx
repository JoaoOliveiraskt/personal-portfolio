import Image from "next/image";
import React from "react";

const BentoLayout = () => {
  return (
    <div className="min-h-screen p-5">
      <div className="grid grid-auto-fit-sm max-w-[960px] m-auto auto-rows-[230px] gap-5">
        <div className="col-span-2 row-span-2 sm:col-span-2">
          <div className="projectModalBg border border-zinc-800 rounded-2xl p-4 w-full h-full">
          <Image 
                src="/womanMusic.png"
                alt="screenmockuprep_One"
               
                layout="fill"
                className="rounded-2xl object-cover"
            />
            Card 1
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className="projectModalBg border border-zinc-800 rounded-2xl w-full h-full">
            <Image 
                src="/microphone.png"
                alt="screenmockuprep_One"
               
                layout="fill"
                className="rounded-2xl object-cover"
            />
            Card 2
          </div>
        </div>
        <div className="row-span-2 col-span-1 sm:col-span-2">
          <div className="projectModalBg border border-zinc-800 rounded-2xl p-4 w-full h-full">
          <Image 
                src="/dog.png"
                alt="screenmockuprep_One"
               
                layout="fill"
                className="rounded-2xl object-cover"
            />
            Card 3
          </div>
        </div>
        <div className="row-span-1 sm:col-span-2">
          <div className="projectModalBg border border-zinc-800 rounded-2xl p-4 w-full h-full">
          <Image 
                src="/musicImage2.png"
                alt="screenmockuprep_One"
               
                layout="fill"
                className="rounded-2xl object-cover"
            />
            Card 4
          </div>
        </div>
        <div className="row-span-1 col-span-2">
          <div className="projectModalBg border border-zinc-800 rounded-2xl p-4 w-full h-full">
          <Image 
                src="/music.png"
                alt="screenmockuprep_One"
               
                layout="fill"
                className="rounded-2xl object-cover"
            />
            Card 5
          </div>
        </div>
        <div className="row-span-1 col-span-1 sm:col-span-2">
          <div className="projectModalBg border border-zinc-800 rounded-2xl p-4 w-full h-full">
          <Image 
                src="/womanMusic2.png"
                alt="screenmockuprep_One"
               
                layout="fill"
                className="rounded-2xl"
            />
            Card 6
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
