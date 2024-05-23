import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import ContactCard from "../sub/ContactCard";
import EmailForm from "../sub/EmailForm";
import Balancer from "react-wrap-balancer";

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
    {
      icon: <FaGithub />,
      text: "github.com/joaoOliveiraskt",
      description: "Github",
      src: "https://github.com/joaoOliveiraskt",
    },
  ];

  return (
    <div
      id="contact"
      className="text-primary w-full flex flex-col justify-center items-center px-4 sm:px-3 py-24 med:pb-10"
    >
      <div className="max-w-[62rem] h-full flex flex-col items-center space-y-10">
        <div className="text-center space-y-2 flex flex-col items-center">
          {/* Titúlo da sessão */}
          <h2 className="text-4xl tracking-tighter med:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-secondary text-transparent bg-clip-text">
            <Balancer>Entre em contato </Balancer>
          </h2>

          {/* Descrição da sessão */}
          <p className="tracking-wide leading-loose text-muted-foreground font-medium">
            <Balancer>
              Tem alguma dúvida ou gostaria de trabalhar juntos? Entre em
              contato comigo através de um dos canais abaixo. Ou se preferir,
              preencha o formulário de contato e retornarei o mais breve
              possível.
            </Balancer>
          </p>
        </div>

        <div className="w-full flex xl:flex-col-reverse gap-4">
            {/* Formulário de contato */}
            <EmailForm />
          {/* Cards de contato */}
          <div className="w-full relative grid grid-cols-2 gap-4">
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

        </div>
      </div>
    </div>
  );
}
