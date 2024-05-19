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
    <div id="contact" className="tracking-wider text-primary min-h-screen w-full flex justify-center py-16 med:py-0">
      <div className="w-[64rem] m-5 xl:m-8 med:m-5 h-full flex flex-col space-y-4 py-5">
        <div>
          <h3 className="text-5xl med:text-3xl text-primary font-semibold">
            Contato{" "}
          </h3>
        </div>

        <div className="relative grid grid-cols-3 gap-4 auto-rows-[230px] ">
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
  );
}
