"use client";

/*
|--------------------------------------------------------------------------
| Testimonials Section
|--------------------------------------------------------------------------
| Purpose:
| Displays customer testimonials.
|
| Future:
| - Fetch from API instead of local data
| - Admin can add/edit/delete testimonials
|--------------------------------------------------------------------------
*/

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import { TESTIMONIALS } from "@/data/testimonials";
import { useLanguage } from "@/components/common/language-provider";

import { Star } from "lucide-react";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = TESTIMONIALS
    .filter((item) => item.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Section
      id="testimonials"
      className="bg-white"
    >
      <SectionTitle
        title={
          language === "hi"
            ? "ग्राहकों की राय"
            : "What Our Customers Say"
        }
        subtitle={
          language === "hi"
            ? "हमारे ग्राहकों का विश्वास ही हमारी सबसे बड़ी पहचान है।"
            : "Customer satisfaction is our biggest achievement."
        }
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.id}>
            {/* Rating */}
            <div className="flex gap-1 text-yellow-500">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Review */}
            <p className="mt-5 leading-7 text-slate-600 italic">
              "{item.message[language]}"
            </p>

            {/* Customer */}
            <div className="mt-8 border-t pt-4">
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-slate-500">
                {item.location}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}