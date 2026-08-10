"use client";

/*
|--------------------------------------------------------------------------
| FAQ Section
|--------------------------------------------------------------------------
| Future:
| - Fetch FAQs from backend
| - Admin CRUD
|--------------------------------------------------------------------------
*/

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import { FAQS } from "@/data/faqs";
import { useLanguage } from "@/components/common/language-provider";

export default function FAQ() {
  const { language } = useLanguage();

  const [openId, setOpenId] = useState<number | null>(1);

  const faqs = FAQS
    .filter((faq) => faq.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Section id="faq" className="bg-slate-50">
      <SectionTitle
        title={language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
        subtitle={
          language === "hi"
            ? "हमारे ग्राहकों द्वारा अक्सर पूछे जाने वाले प्रश्न।"
            : "Answers to the questions we receive most often."
        }
      />

      <div className="mx-auto mt-12 max-w-4xl space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <Card key={faq.id}>
              <button
                type="button"
                onClick={() =>
                  setOpenId(isOpen ? null : faq.id)
                }
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question[language]}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <p className="mt-5 leading-7 text-slate-600">
                  {faq.answer[language]}
                </p>
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}