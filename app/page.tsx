"use client";

import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Header from "@/components/main/Header";
import ScrollYProgress from "@/components/sub/ScrollYProgress";
import Skills from "@/components/main/Skills";
import DesignSection from "@/components/main/DesignSection";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full ">
      <ScrollYProgress />
      <div className="relative flex flex-col w-full h-full ">
        <Header />
        <Hero />
        <DesignSection />
        <Skills/>
        <Projects />
        <Contact />
        {/*   
        <div className="fixed w-16 h-10 bg-card bottom-5 right-10">
          <a href="#hero">Back</a>
        </div>
        */}
      </div>
    </main>
  );
}
