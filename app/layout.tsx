import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import Footer from "@/components/main/Footer";
import { ThemeProvider } from "./theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "João Oliveira",
  description: "This is my web developer portfolio",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden bg-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
