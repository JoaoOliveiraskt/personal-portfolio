"use client";

import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import { motion, useScroll, useSpring } from "framer-motion";
import BentoLayout from "@/components/main/BentoLayout";
import { Link } from "react-router-dom";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  return (
    <main className="h-full w-full ">
      <motion.div
        style={{
          scaleX,
          background: "linear-gradient(to right, #a855f7, #06b6d4);",
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "1px",
          zIndex: 100,
        }}
      />

        <div className="flex flex-col w-full h-full">
          <Header />
          <Hero />
          <Projects />
        </div>
      </main>
  );
}
