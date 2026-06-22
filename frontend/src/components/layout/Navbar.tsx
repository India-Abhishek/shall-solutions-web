"use client";

import Container from "./Container";
import { useLanguage } from "@/components/common/language-provider";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="font-bold text-xl text-[#0D1B4A]">
              SHALL SOLUTIONS
            </h1>
          </div>

          <nav className="hidden md:flex gap-6">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2 py-1 rounded ${
                language === "hi"
                  ? "bg-[#0D1B4A] text-white"
                  : "border"
              }`}
            >
              हिन्दी
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded ${
                language === "en"
                  ? "bg-[#0D1B4A] text-white"
                  : "border"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}