import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="tracking-wider text-primary min-h-screen w-full flex justify-center py-16 med:py-0">
      <div className="w-[81rem] m-4 xl:m-8 med:m-4 h-full flex flex-col space-y-4">
        <div>
          <h3>Contact </h3>
        </div>

        <div className="grid grid-cols-3 gap-4 auto-rows-[270px] ">
          <div className="xl:col-span-3 bg-card rounded-xl p-8 border border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col h-full  justify-between">
              <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <FiPhoneCall />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-2xl">+55 24 99991 4901</span>
                <span className="font-semibold">Phone Number</span>
              </div>
            </div>
          </div>

          <div className="xl:col-span-3 bg-card rounded-xl p-8 border border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col h-full  justify-between">
              <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <HiOutlineMail />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-2xl">joaoliveiraam@gmail.com</span>
                <span className="font-semibold">E-mail</span>
              </div>
            </div>
          </div>

          <div className="xl:col-span-3 bg-card rounded-xl border border-zinc-200 dark:border-zinc-800">
            <a href="https://www.linkedin.com/in/jo%C3%A3ov-oliveira/" target="_blank">
            <div className="flex flex-col h-full  justify-between p-8 ">
              <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <FaLinkedinIn />
              </div>
              <div className="flex flex-col space-y-3">
                  <span className="text-2xl hover:text-blue-500">/in/joãov-oliveira</span>
                <span className="font-semibold">Linkedin</span>
              </div>
            </div>
            </a>
          </div>

        </div>
        <div className="grid auto-rows-[300px]">
           <div className="bg-card row-span-2 rounded-xl">
           <div className="flex flex-col">Contact</div>
            <div className="flex flex-col">
              <span>220988387</span>
              <span>Phone Number</span>
            </div>
           </div>
          </div>
      </div>
    </div>
  );
}
