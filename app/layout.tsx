import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import React from "react";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "João Oliveira",
  description: "This is my web developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} body-bg overflow-y-scroll overflow-x-hidden`}
        style={{ minHeight: "100vh" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
