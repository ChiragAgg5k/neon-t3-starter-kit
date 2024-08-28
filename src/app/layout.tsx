import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import React from "react";
import { Navbar } from "./_components/navbar";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
