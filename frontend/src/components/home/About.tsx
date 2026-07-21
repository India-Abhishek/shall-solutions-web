"use client";

import { useLanguage } from "@/components/common/language-provider";
import SectionTitle from "@/components/ui/SectionTitle";
import { COMPANY } from "@/config/company";

export default function About() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-5xl px-6">

        <SectionTitle
          title={
            language === "hi"
              ? "हमारे बारे में"
              : "About Us"
          }
          subtitle={
            language === "hi"
              ? "30+ वर्षों के अनुभव और विश्वास की विरासत"
              : "Over 30 years of trusted experience and customer satisfaction."
          }
        />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

          <p className="whitespace-pre-line text-lg leading-8 text-slate-600">
            {COMPANY.about[language]}
          </p>

        </div>

      </div>
    </section>
  );
}