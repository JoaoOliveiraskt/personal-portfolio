import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export const Links = [
  { name: "Tecnologias", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export const Socials = [
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/JoaoOliveiraskt?tab=repositories",
    hoverColor: "",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/jo%C3%A3ov-oliveira/",
    hoverColor: "#2867B2",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.gg/5UKyhekA",
    hoverColor: "#5865f2",
  },
  {
    name: "Whatsapp",
    icon: IoLogoWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=5524999914901&text&type=phone_number&app_absent=0",
    hoverColor: "#9f6",
  },
];

export const Frontend_skill = [
  {
    skill_name: "Css",
    Image: "/icons/css.svg",
    width: 28,
    height: 45,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Figma",
    Image: "/icons/figma.svg",
    width: 23,
    height: 20,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Git",
    Image: "/icons/git-color.svg",
    width: 35,
    height: 35,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Html",
    Image: "/icons/html5.svg",
    width: 28,
    height: 45,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Java Script",
    Image: "/icons/javascript-color.svg",
    width: 30,
    height: 50,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Next.js",
    Image: "/icons/nextjs.svg",
    width: 60,
    height: 60,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Node.js",
    Image: "/icons/node-color.svg",
    width: 60,
    height: 60,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "PostgreSQL",
    Image: "/icons/postgresql-color.svg",
    width: 35,
    height: 35,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Prisma",
    Image: "/icons/prisma-color.svg",
    width: 35,
    height: 35,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "React.js",
    Image: "/icons/react.svg",
    width: 35,
    height: 60,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "shadcn/ui",
    Image: "/icons/shadcnui-color.svg",
    width: 35,
    height: 35,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "TailwindCSS",
    Image: "/icons/tailwindcss.svg",
    width: 50,
    height: 70,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "TypeScript",
    Image: "/icons/typescript-color.svg",
    width: 50,
    height: 70,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
  {
    skill_name: "Vercel",
    Image: "/icons/vercel-color.svg",
    width: 35,
    height: 35,
    backgroundColor: "linear-gradient(to right, #31363F 0%, #222831 100%)",
  },
];

export const My_Projects = [
  {
    title: "Moto Log",
    caption:
      "E-commerce para lojas locais que não possuem um site de vendas online.",
    description:
      "Este projeto foi desenvolvido para ajudar pequenas empresas a vender seus produtos online e oferecer uma experiência de compra fácil e segura para seus clientes.",
    src: "https://moto-log-app.vercel.app",
    photo: "/moto-log-ec.png",
    icon: "/motolog-icon.avif",
    tech: [
      {
        name: "React",
        src: "/icons/react.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Next.js",
        src: "/icons/nextjs.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Tailwind CSS",
        src: "/icons/tailwindcss.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Shadcn/ui",
        src: "/icons/shadcn-ui.svg",
        width: 30,
        height: 30,
      },
      {
        name: "TypeScript",
        src: "/icons/typescript-color.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Prisma",
        src: "/icons/prisma2.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Neon",
        src: "/icons/neon-tech.png",
        width: 30,
        height: 30,
      },
      {
        name: "PostgreSQL",
        src: "/icons/postgresql.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Node.js",
        src: "/icons/nodejs.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Vercel",
        src: "/icons/vercel.svg",
        width: 30,
        height: 30,
      },
    ],
  },
  {
    title: "Resumi AI",
    caption: "Resuma o conteúdo de uma página web",
    description:
      "Projetado para resumir o conteúdo de uma página web, criado com Vite usando a Article Extractor and Summarizer API.",
    src: "https://resumi-ai.vercel.app",
    photo: "/resumi-ai.png",
    icon: "/ra-icon.avif",
    tech: [
      {
        name: "React",
        src: "/icons/react.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Vite",
        src: "/icons/vite-icon.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Tailwind CSS",
        src: "/icons/tailwindcss.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Open AI API",
        src: "/icons/openai2.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Vercel",
        src: "/icons/vercel.svg",
        width: 30,
        height: 30,
      },
    ],
  },
  {
    title: "Trips",
    caption: "Site de reserva de acomodações",
    description:
      "Este projeto foi uma ótima experiência de aprendizado em estruturas de dados, processos de autenticação, trabalho com datas e funcionalidade de pagamento usando o Stripe.",
    src: "https://long-trips.vercel.app",
    photo: "/trips.png",
    icon: "/trips-icon.avif",
    tech: [
      {
        name: "React",
        src: "/icons/react.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Next.js",
        src: "/icons/nextjs.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Tailwind CSS",
        src: "/icons/tailwindcss.svg",
        width: 30,
        height: 30,
      },
      {
        name: "TypeScript",
        src: "/icons/typescript-color.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Prisma",
        src: "/icons/prisma2.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Supabase",
        src: "/icons/supabase.svg",
        width: 30,
        height: 30,
      },
      {
        name: "PostgreSQL",
        src: "/icons/postgresql.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Stripe",
        src: "/icons/stripe.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Vercel",
        src: "/icons/vercel.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Node.js",
        src: "/icons/nodejs.svg",
        width: 30,
        height: 30,
      },
    ],
  },
  {
    title: "Clima",
    caption: "Temperatura, Condições e Além",
    description:
      "Desenvolvido para pesquisar a temperatura de qualquer cidade do mundo, o projeto foi fundamental para o meu aprendizado sobre conexões com APIs.",
    src: "https://joaooliveiraskt.github.io/Weather/",
    photo: "/weather.png",
    icon: "/ios-weather.svg",
    tech: [
      {
        name: "HTML",
        src: "/icons/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/icons/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "JavaScript",
        src: "/icons/javascript.svg",
        width: 30,
        height: 30,
      },
    ],
  },
  {
    title: "Moto Log LP",
    caption: "Landing page do aplicativo Moto Log",
    description:
      "Site de apresentação para o aplicativo Moto Log, um aplicativo de entrega móvel que será desenvolvido como parte de um trabalho universitário.",
    src: "https://joaooliveiraskt.github.io/Moto-Log-Website/",
    photo: "/moto-log-landing-page.png",
    icon: "/motolog-icon.avif",
    tech: [
      {
        name: "HTML",
        src: "/icons/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/icons/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "JavaScript",
        src: "/icons/javascript.svg",
        width: 30,
        height: 30,
      },
    ],
  },
  {
    title: "God of War",
    caption: "Landing page do God of War",
    description: "Uma landing page inspirada no jogo God of War.",
    src: "https://joaooliveiraskt.github.io/gow-page/",
    photo: "/gow.png",
    icon: "/gow-icon.avif",
    tech: [
      {
        name: "HTML",
        src: "/icons/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/icons/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "JavaScript",
        src: "/icons/javascript.svg",
        width: 30,
        height: 30,
      },
    ],
  },
  {
    title: "Blizzard",
    caption: "Landing page da Blizzard",
    description: "Uma landing page inspirada na marca Blizzard.",
    src: "https://joaooliveiraskt.github.io/blizzard-page/",
    photo: "/blizzard.png",
    icon: "/blizzard-icon.avif",
    tech: [
      {
        name: "HTML",
        src: "/icons/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/icons/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "JavaScript",
        src: "/icons/javascript.svg",
        width: 30,
        height: 30,
      },
    ],
  },
];
