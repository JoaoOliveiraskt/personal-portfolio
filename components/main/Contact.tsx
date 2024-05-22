import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

import ContactCard from "../sub/ContactCard";
import EmailForm from "../sub/EmailForm";

export default function Contact() {

  const cardContent = [
    {
      icon: <FiPhoneCall />,
      text: "+55 24 99991 4901",
      description: "Whatsapp",
      src: "https://api.whatsapp.com/send/?phone=5524999914901&text&type=phone_number&app_absent=0",
    },
    {
      icon: <HiOutlineMail />,
      text: "joaoliveiraam@gmail.com",
      description: "E-mail",
      src: "",
    },
    {
      icon: <FaLinkedinIn />,
      text: "/in/joãov-oliveira",
      description: "Linkedin",
      src: "https://www.linkedin.com/in/jo%C3%A3ov-oliveira/",
    },
  ];

  return (
    <div id="contact" className="tracking-tight text-primary min-h-screen w-full flex justify-center px-4 sm:px-3 py-16 med:pb-10">
      <div className="w-[64rem] h-full flex flex-col space-y-10 pt-10">
        <div>
          <h3 className="text-4xl tracking-tighter med:text-3xl text-text-gradient font-bold bg-gradient-to-r from-primary via-primary to-text text-transparent bg-clip-text">
            Contato{" "}
          </h3>
        </div>

      <div className="flex flex-col gap-4">
      <div className="relative grid grid-cols-3 gap-4">
          {cardContent.map((card, index) => (
            <ContactCard
              key={index}
              url={card.src}
              icon={card.icon}
              text={card.text}
              description={card.description}
              className=""
            />
          ))}
        </div>

        <EmailForm />
      </div>
      </div>
    </div>
  );
}
