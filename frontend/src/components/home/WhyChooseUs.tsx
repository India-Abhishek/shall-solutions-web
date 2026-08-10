"use client";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/components/common/language-provider";
import { WHY_CHOOSE_US } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const features = WHY_CHOOSE_US
    .filter((item) => item.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Section id="why-choose-us">
      <SectionTitle
        title={
          language === "hi"
            ? "हमें क्यों चुनें?"
            : "Why Choose Us?"
        }
        subtitle={
          language === "hi"
            ? "अनुभव, विश्वास और गुणवत्तापूर्ण सेवाओं का सही मिश्रण।"
            : "Experience, trust, and quality services you can rely on."
        }
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.id}
              className="text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Icon
                  className="text-orange-500"
                  size={32}
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {feature.title[language]}
              </h3>

              <p className="leading-7 text-slate-600">
                {feature.description[language]}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}