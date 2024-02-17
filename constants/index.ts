import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export const Socials = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/jo%C3%A3ov-oliveira/",
    hoverColor: "#2867B2",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/JoaoOliveiraskt?tab=repositories",
    hoverColor: "#FF6347",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.gg/5UKyhekA",
    hoverColor: "#5865f2",
  },
];

export const Links = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Frontend_skill = [
  {
    skill_name: "Css",
    Image: "/css.svg",
    width: 28,
    height: 45,
    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
  {
    skill_name: "Figma",
    Image: "/figma.svg",
    width: 23,
    height: 35,
    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
  /**{
    skill_name: "Framer",
    Image: "/framer.svg",
    width: 35,
    height: 35,
   backgroundColor: 'linear-gradient(to right, #434343 0%, black 100%)',
  },**/
  {
    skill_name: "Html",
    Image: "/html5.svg",
    width: 28,
    height: 45,
    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
  {
    skill_name: "Java Script",
    Image: "/javascript.svg",
    width: 30,
    height: 50,
    // gere um novo gradiente colorido escuro para o javascript e adicione aqui no backgroundColor 
    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
  {
    skill_name: "Next.js",
    Image: "/nextjs.svg",
    width: 50,
    height: 60,
    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
  {
    skill_name: "React.js",
    Image: "/react.svg",
    width: 35,
    height: 60,

    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
  {
    skill_name: "TailwindCSS",
    Image: "/tailwindcss.svg",
    width: 35,
    height: 70,
    backgroundColor: ' linear-gradient(to right, #222222 0%, black 100%)',
  },
];

export const My_Projects = [
  {
    title: "Resumi AI",
    caption: "Content summary of a web page",
    description:"Designed to summarize the content of a web page, created with Next.js using the Article Extractor and Summarizer API.",
    src: "https://resumi-ai.vercel.app",
    photo: "/Resumi.png",
    tech: [
      {
        name: "React",
        src: "/react.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Next js",
        src: "/nextjs.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Tailwind Css",
        src: "/tailwindcss.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Open AI API",
        src: "/openai2.svg",
        width: 30,
        height: 30,
      },
    ]
  },
  {
    title: "Trips",
    caption: "Travel booking website",
    description:"This project was a great learning experience into data structures, authentication processes, working with dates, and payment functionality using Stripe.",
    src: "https://long-trips.vercel.app",
    photo: "/Trips.png",
    tech: [
      {
        name: "React",
        src: "/react.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Next js",
        src: "/nextjs.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Tailwind Css",
        src: "/tailwindcss.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Prisma",
        src: "/prisma2.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Supabase",
        src: "/supabase.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Postgresql",
        src: "/postgresql.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Stripe",
        src: "/stripe.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Vercel",
        src: "/vercel2.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Node.js",
        src: "/nodejs.svg",
        width: 30,
        height: 30,
      },
    ]
  },
  {
    title: "Moto Log",
    caption: "Moto Log app presentation website",
    description:"Presentation site for the Moto Log application, a mobile delivery application that will be developed as part of a college assignment.",
    src: "https://joaooliveiraskt.github.io/Moto-Log-Website/",
    photo: "/MotoLog.png",
    tech: [
      {
        name: "HTML",
        src: "/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Java Script",
        src: "/javascript.svg",
        width: 30,
        height: 30,
      },
    ]
  },
  {
    title: "God of War",
    caption: "God of war landing page",
    description:"A landing page inspired by the game God of War.",
    src: "https://joaooliveiraskt.github.io/gow-page/",
    photo: "/Gow.png",
    tech: [
      {
        name: "HTML",
        src: "/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Java Script",
        src: "/javascript.svg",
        width: 30,
        height: 30,
      },
    ]
  },
  {
    title: "Blizzard",
    caption: "Blizzard landing page",
    description:"Landing page inspired by the Blizzard brand.",
    src: "https://joaooliveiraskt.github.io/blizzard-page/",
    photo: "/Blizzard.png",
    tech: [
      {
        name: "HTML",
        src: "/html5.svg",
        width: 30,
        height: 30,
      },
      {
        name: "CSS",
        src: "/css.svg",
        width: 30,
        height: 30,
      },
      {
        name: "Java Script",
        src: "/javascript.svg",
        width: 30,
        height: 30,
      },
    ]
  },
];
