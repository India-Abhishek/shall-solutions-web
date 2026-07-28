"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./Container";

import { useLanguage } from "@/components/common/language-provider";
import { NAVIGATION } from "@/config/navigation";
import { COMPANY } from "@/config/company";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <Container>
        <div className="flex items-center justify-between min-h-16 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#0D1B4A] flex-shrink-0" />

              <div className="leading-tight">
                <p className="text-lg sm:text-xl font-bold text-[#0D1B4A]">
                  {COMPANY.name}
                </p>

                <p className="hidden lg:block text-xs text-gray-500">
                  {COMPANY.tagline}
                </p>
              </div>

            </div> 

          <nav className="hidden lg:flex items-center gap-8">
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

          {/* <div className="flex gap-2">
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "hi"
                  ? "bg-[#0D1B4A] text-white"
                  : "border hover:bg-slate-100"
              }`}
            >
              हिन्दी
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-[#0D1B4A] text-white"
                  : "border hover:bg-slate-100"
              }`}
            >
              EN
            </button>
          </div> */}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "hi"
                  ? "bg-[#0D1B4A] text-white"
                  : "border hover:bg-slate-100"
              }`}
            >
              हिन्दी
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-[#0D1B4A] text-white"
                  : "border hover:bg-slate-100"
              }`}
            >
              EN
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-md p-2 hover:bg-slate-100 lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {isMenuOpen && (
          <nav className="border-t border-slate-200 py-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#F97316]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

      </Container>
    </header>
  );
}