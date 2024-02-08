import Image from "next/image";
import getMonthDifference from "@/utils/developerDate";
import Balancer from "react-wrap-balancer";
import { Socials } from "@/constants/index";
import { IoMailUnreadOutline } from "react-icons/io5";

const BentoLayout = () => {
  return (
    <div className="min-h-screen p-5 sm:p-0 tracking-wider">
      <div className="grid grid-cols-8 max-w-[70rem] m-auto auto-rows-max gap-5">
               
        <div className="h-max space-y-32 col-span-5 sm:col-span-2 p-10 rounded-2xl overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <div className=" h-full space-y-12 ">
            <h1 className=" font-semibold text-4xl text-zinc-100 max-w-[600px]">
              <Balancer>
              Hello, I&apos;m João, a beginner Developer with{" "}
              {getMonthDifference()} months of experience in website.
              </Balancer>
            </h1>
            <p className="text-zinc-400 text-lg ">
              <Balancer>
                Although I&apos;m still in the early stages of my journey as a
                developer, my enthusiasm for creating visually appealing
                interfaces is evident in each project.
              </Balancer>
            </p>

          </div>
            <div className="flex items-center space-x-16">
              
              <a href="#contact" className="relative inline-flex  group">
                <div className="absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#9e44ff] to-[#FF675E] rounded-full blur-lg  group-hover:opacity-55 group-hover:-inset-1 group-hover:duration-200"></div>
                <button className="relative inline-flex items-center justify-center space-x-4 px-12 py-4 text-lg font-bold text-zinc-900 transition-all duration-200 bg-gradient-to-r from-zinc-50 to-teal-100 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <IoMailUnreadOutline className="text-xl"/>
                  <span>Contact me</span>
                </button>
              </a>

             <div className="flex items-center space-x-6">
             {Socials.map((social, index) => (
                <a key={index} href={social.link} >
                  <Image 
                  src={social.src}
                  alt={social.name}
                  title={social.name}
                  width={40}
                  height={40}      
                  />
                </a>
              ))}
             </div>
            </div>
        </div>

        <div className="col-span-3 overflow-hidden rounded-2xl">
          <div className="relative w-full h-full">
            <Image
              src="/musicImage2.png"
              alt="My profile picture"  
              layout="fill"
              objectFit="cover"
              />    
          </div>
        </div>

      </div>
    </div>
  );
};

export default BentoLayout;
