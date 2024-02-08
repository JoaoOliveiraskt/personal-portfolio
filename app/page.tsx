"use client";

import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import BentoLayout from "@/components/main/BentoLayout";
import Header from "@/components/main/Header";
import ScrollYProgress from "@/components/sub/ScrollYProgress";

export default function Home() {
  return (
    <main className="h-full w-full ">
      <ScrollYProgress />
      <div className="flex flex-col w-full h-full">
        <Header />
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
