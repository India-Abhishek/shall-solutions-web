"use client";

import { useLanguage } from "@/components/common/language-provider";

const services = {
  en: [
    "Electronics",
    "Electrical",
    "PVC Interiors",
    "Furniture",
    "Home Improvement",
    "Construction Support",
  ],
  hi: [
    "इलेक्ट्रॉनिक्स",
    "इलेक्ट्रिकल",
    "पीवीसी इंटीरियर",
    "फर्नीचर",
    "गृह सुधार",
    "निर्माण सहायता",
  ],
};

export default function Services() {
  const { language } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          {language === "hi" ? "हमारी सेवाएँ" : "Our Services"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services[language].map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold text-lg">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}