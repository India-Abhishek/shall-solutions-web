"use client";

import { useLanguage } from "@/components/common/language-provider";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "SHALL SOLUTIONS",
      subtitle: "Smart Solutions for Better Living",
      description:
        "30+ years of experience in electronics, electrical solutions, furniture, PVC interiors, and home improvement.",
      whatsapp: "WhatsApp Us",
      call: "Call Now",
    },

    hi: {
      title: "SHALL SOLUTIONS",
      subtitle: "बेहतर जीवन के लिए स्मार्ट समाधान",
      description:
        "इलेक्ट्रॉनिक्स, इलेक्ट्रिकल समाधान, फर्नीचर, पीवीसी इंटीरियर और गृह सुधार में 30+ वर्षों का अनुभव।",
      whatsapp: "व्हाट्सऐप करें",
      call: "कॉल करें",
    },
  };

  const t = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0D1B4A]">
          {t.title}
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-[#F97316] font-semibold">
          {t.subtitle}
        </p>

        <p className="mt-6 text-lg text-gray-600">
          {t.description}
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/919931483382"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium"
          >
            {t.whatsapp}
          </a>

          <a
            href="tel:6203876330"
            className="px-6 py-3 rounded-lg bg-[#0D1B4A] text-white font-medium"
          >
            {t.call}
          </a>
        </div>
      </div>
    </section>
  );
}