import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import ContactCard from "../sub/ContactCard";
import HandleOnMouseMove from "@/utils/hoverEffect";
import { useState } from "react";
import EmailForm from "../sub/EmailForm";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cardContent = [
    {
      icon: <FiPhoneCall />,
      text: "+55 24 99991 4901",
      description: "Phone Number",
    },
    {
      icon: <HiOutlineMail />,
      text: "joaoliveiraam@gmail.com",
      description: "E-mail",
    },
  ];

  return (
    <div className="tracking-wider text-primary min-h-screen w-full flex justify-center py-16 med:py-0">
      <div className="w-[64rem] m-5 xl:m-8 med:m-5 h-full flex flex-col space-y-4 py-5">
        <div>
          <h3 className="text-4xl med:text-2xl text-primary font-medium">Contact </h3>
        </div>

        <div className="relative grid grid-cols-3 gap-4 auto-rows-[230px] ">
          {cardContent.map((card, index) => (
            <ContactCard
              key={index}
              icon={card.icon}
              text={card.text}
              description={card.description}
            />
          ))}

          <div
            onMouseMove={(e) => HandleOnMouseMove(e, setMousePosition)}
            className=" relative med:col-span-3 bg-card rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-md"
          >
            <a
              href="https://www.linkedin.com/in/jo%C3%A3ov-oliveira/"
              target="_blank"
            >
              <div className="flex flex-col h-full  justify-between p-8 ">
                <div className="w-12 h-12 rounded-full dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                  <FaLinkedinIn />
                </div>
                <div className="flex flex-col space-y-3 w-max">
                  <span className="text-xl hover:text-blue-500 z-50">
                    /in/joãov-oliveira
                  </span>
                  <span className="font-semibold">Linkedin</span>
                </div>
              </div>
            </a>
            {/* Gradiente com base na posição do mouse */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.07), transparent)`,
              }}
            ></div>
          </div>
        </div>

        <EmailForm />
      </div>
    </div>
  );
}
