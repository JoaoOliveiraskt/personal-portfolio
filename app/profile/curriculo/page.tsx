import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";
import ResumeHeader from "@/components/main/ResumeHeader";

export default function Curriculo() {
  return (
    <main className="dark:autBg bg-background tracking-wider min-h-screen w-full px-5 pb-24 sm:p-3 sm:pt-10 flex flex-col items-center justify-center gap-5">
      <ResumeHeader />
      <div
        id="curriculo"
        className="mt-40 sm:mt-24 rounded-3xl max-w-[60rem] border border-zinc-200 dark:border-zinc-800 h-full p-12 sm:px-4 sm:w-full space-y-6"
      >
        <div className="flex med:flex-col-reverse justify-between med:gap-6 items-start">
         

          <div className="flex flex-col space-y-2">
            <h1 className="med:hidden text-2xl font-bold text-primary ">
              João Victor Flores
            </h1>
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-semibold text-primary ">
                Desenvolvedor Front End
              </h2>

              <p className="max-w-80 text-text">
                <Balancer>
                  Com 9 meses de experiência em estágio remoto e mais de 1 ano
                  em projetos independentes resolvendo desafios com Java Script,
                  React.js e CSS.
                </Balancer>
              </p>
            </div>
          </div>
          

          <div id="links-curriculo">
            <ul className="space-y-1 text-primary">
              <li>
                <p>Squarema/RJ, Brasil</p>
              </li>
              <li>
                <p>
                  Contato: <span>(24) 99991-4901</span>
                </p>
              </li>
              <li>
                <p>
                  Email: <span>joaooliveiram@gmail.com</span>
                </p>
              </li>
              <li>
                <p>
                  Github:{" "}
                  <a href="https://github.com/JoaoOliveiraskt" target="_blank">
                    <span>/JoaoOliveiraskt</span>
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Linkedin:{" "}
                  <a
                    href="https://www.linkedin.com/in/jo%C3%A3ov-oliveira"
                    target="_blank"
                  >
                    <span>in/joãov-oliveira</span>
                  </a>
                </p>
              </li>
              <li className="overflow-hidden whitespace-nowrap">
                <p>
                  Portfolio:{" "}
                  <Link href="/">
                    <span className="">joaooliveiraweb.vercell.app</span>
                  </Link>
                </p>
              </li>
            </ul>

            
          </div>
          <h1 className="med:block hidden text-2xl font-bold text-primary ">
            João Victor Flores
          </h1>
        </div>

        <section className="space-y-2">
          <h3>Tecnologias</h3>
          <p className="text-text">
            CSS, Git/Github, HTML, JavaScript, Next.js, PostgreSQL, Python,
            React.js, Styled Components, Tailwind CSS.
          </p>
        </section>

        <section className="space-y-2">
          <h3>Experiência</h3>
          <div className="flex w-full justify-between items-center text-primary med:flex-col med:items-start med:space-y-2">
            <p>Estágio desenvolvedor Front-end</p>
            <p className="uppercase font-bold text-primary">DMS Logistics</p>
            <p>11/2022 - 08/2023</p>
          </div>
          <div>
            <ul className="space-y-5 text-text list-disc ml-6">
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
          <ul className="space-y-5 text-text">
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
          <ul className="space-y-5 text-text ">
            <li>
              <h4 className="text-primary font-bold text-lg">Inglês</h4>
              <p>Interemdiário</p>
            </li>
            <li>
              <h4 className="text-primary font-bold text-lg">
                Universidade de Vassouras
              </h4>
              <p>Graduação em Engenharia de Software, 2022 - 2026</p>
            </li>
            <li>
              <h4 className="text-primary font-bold text-lg">
                Frontend Masters
              </h4>
              <p>Complete intro to React, v8.</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
