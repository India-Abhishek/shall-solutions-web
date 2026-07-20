"use client";

import Container from "./Container";
import { useLanguage } from "@/components/common/language-provider";
import { NAVIGATION } from "@/config/navigation";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#0D1B4A]" />

            <div>
              <p className="text-xl font-bold text-[#0D1B4A]">
                SHALL SOLUTIONS
              </p>

              <p className="text-xs text-gray-500">
                Smart Solutions for Better Living
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            {NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#F97316]"
              >
                {item.label}
              </a>
            ))}
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