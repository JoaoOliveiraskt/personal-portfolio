import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Curriculo() {
  return (
    <main className="tracking-wider bg-neutral-950 min-h-screen w-full px-5 pt-10 pb-24 sm:p-0 sm:pt-10 flex flex-col items-center justify-center gap-5">
      <div className="bg-neutral-950 max-w-[60rem] px-12 sm:px-3 fixed left-0 right-0 top-0 h-14 m-auto flex items-center">
        <Link
          href="/profile"
          className="bg-neutral-900 text-white flex items-center justify-center gap-4 w-28  h-9 hover:bg-[#434343b3] rounded-xl"
        >
          <FaLongArrowAltLeft className="text-white" />
          Return
        </Link>
      </div>
      <div
        id="curriculo"
        className=" rounded-3xl max-w-[60rem] border border-zinc-800 h-full p-12 sm:px-4 sm:w-full space-y-6 mt-6"
      >
        <div className="flex med:flex-col-reverse justify-between med:gap-6 items-start">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold text-white ">
              João Victor Flores
            </h1>
            <h2 className="text-xl font-semibold text-white ">
              Desenvolvedor Front End
            </h2>
            <Balancer>
              <p className="max-w-80 text-zinc-400">
                Com 9 meses de experiência em estágio remoto e mais de 1 ano em
                projetos independentes resolvendo desafios com Java Script,
                React.js e CSS.
              </p>
            </Balancer>
          </div>
          <div id="links-curriculo">
            <ul className="space-y-1 text-white">
              <li>Squarema/RJ, Brasil</li>
              <li>
                Contato: <span>(24) 99991-4901</span>
              </li>
              <li>
                Email: <span>joaooliveira@gmail.com</span>
              </li>
              <li>
                Github:{" "}
                <a href="https://github.com/JoaoOliveiraskt" target="_blank">
                  <span>/JoaoOliveiraskt</span>
                </a>
              </li>
              <li>
                Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3ov-oliveira"
                  target="_blank"
                >
                  <span>in/joãov-oliveira</span>
                </a>
              </li>
              <li className="overflow-hidden whitespace-nowrap">
                Portfolio:{" "}
                <Link href="/">
                  <span className="">joaooliveiraweb.vercell.app</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <section className="space-y-2">
          <h3>Tecnologias</h3>
          <p className="text-zinc-400">
            CSS, Git/Github, HTML, JavaScript, Next.js, PostgreSQL, Python,
            React.js, Styled Components, Tailwind CSS.
          </p>
        </section>

        <section className="space-y-2">
          <h3>Experiência</h3>
          <div className="flex w-full justify-between items-center text-white med:flex-col med:items-start med:space-y-2">
            <p>Estágio desenvolvedor Front-end</p>
            <p className="uppercase font-bold text-white">DMS Logistics</p>
            <p>11/2022 - 08/2023</p>
          </div>
          <div>
            <ul className="space-y-5 text-zinc-400 list-disc ml-6">
              <li>
                <p>
                  Desenvolvimento de aplicações independentes front-end com
                  HTML, CSS, JavaScript, Styled components e React.js.
                </p>
              </li>
              <li>
                <p>
                  Redesign completo de um sistema interno django para React.js,
                  atendendo a todos os casos de uso do sistema. Resultando em
                  uma melhor experiência do usuário.
                </p>
              </li>
              <li>
                <p>
                  Técnicas de metodologias ágeis no desenvolvimento do sistema,
                  trabalhando em conjunto com dois desenvolvedores estagiários.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="space-y-2">
          <h3>Projetos</h3>
          <ul className="space-y-5 text-zinc-400">
            <li>
              <p>
                <a href="https://resumi-ai.vercel.app" target="_blank">
                  <span className="text-lg">Resumi.AI:</span>
                </a>{" "}
                Permite o usuáruio resumir o conteúdo de uma página da web com o
                chatGPT. Desenvolvido com React.js, TailwindCSS e Article
                Extractor e Summarizer API.
              </p>
            </li>
            <li>
              <p>
                <a href="https://long-trips.vercel.app" target="_blank">
                  <span className="text-lg">Trips:</span>
                </a>{" "}
                Desenvolvido em um mini curso, esse é um sistema de reservas de
                hospedagens que permite o usuário procurar pelo destino ou
                categoria, reservar e cancelar a hospedagem e fazer o pagamento.
                desenvolvido com Next.js, TailwindCSS, Typescript, Node.js,
                Supabase, Prisma, PostgreSQL, pagamento via Stripe e NextAuth
                para login.{" "}
              </p>
            </li>
            <li>
              <p>
                <a href="https://chat-ai-rust-two.vercel.app" target="_blank">
                  <span className="text-lg">Chat AI:</span>
                </a>{" "}
                WebApp de chat com IA, construído com React.js e Tailwind CSS,
                conectado pelo Vercel AI SDK.{" "}
              </p>
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3>Educação</h3>
          <ul className="space-y-5 text-zinc-400 ">
            <li>
              <h4 className="text-white font-bold text-lg">Inglês</h4>
              <p>Interemdiário</p>
            </li>
            <li>
              <h4 className="text-white font-bold text-lg">
                Universidade de Vassouras
              </h4>
              <p>Graduação em Engenharia de Software, 2022 - 2026</p>
            </li>
            <li>
              <h4 className="text-white font-bold text-lg">Frontend Masters</h4>
              <p>Complete intro to React, v8.</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
