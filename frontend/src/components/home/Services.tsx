"use client";

import { useLanguage } from "@/components/common/language-provider";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/data/services";

export default function Services() {
  const { language } = useLanguage();

  const visibleServices = SERVICES
    .filter((service) => service.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section
      id="services"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title={
            language === "hi"
              ? "हमारी सेवाएँ"
              : "Our Services"
          }
          subtitle={
            language === "hi"
              ? "आपके घर के लिए सम्पूर्ण समाधान"
              : "Everything you need for your home under one roof."
          }
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {visibleServices.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.id}>

                <div className="mb-5 inline-flex rounded-xl bg-orange-100 p-3">
                  <Icon className="h-8 w-8 text-orange-600" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-800">
                  {service.title[language]}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description[language]}
                </p>

              </Card>
            );
          })}

        </div>
      </div>
    </section>
  );
}