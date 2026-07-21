"use client";

import { useLanguage } from "@/components/common/language-provider";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/config/company";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: COMPANY.name,
      subtitle: COMPANY.tagline,
      description: COMPANY.description,
      location: "Bettiah, West Champaran, Bihar",
      whatsapp: "WhatsApp Us",
      call: "Call Now",
    },

    hi: {
      title: COMPANY.name,
      subtitle: "बेहतर जीवन के लिए स्मार्ट समाधान",
      description:
        "विश्वसनीय इलेक्ट्रॉनिक्स, इलेक्ट्रिकल, फर्नीचर, पीवीसी इंटीरियर एवं गृह समाधान।",
      location: "बेतिया, पश्चिम चंपारण, बिहार",
      whatsapp: "व्हाट्सऐप करें",
      call: "कॉल करें",
    },
  };

  const t = content[language];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <Badge variant="orange">⭐ 30+ Years Experience</Badge>

          <Badge variant="blue">🤝 Trusted Local Business</Badge>

          <Badge variant="green">🛠 Customer Focused Service</Badge>
        </div>

        <h1 className="text-5xl font-bold text-[#0D1B4A] md:text-7xl lg:text-8xl">
          {t.title}
        </h1>

        <p className="mt-5 text-2xl font-semibold text-[#F97316] md:text-3xl">
          {t.subtitle}
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {t.description}
        </p>

        <p className="mt-5 font-medium text-slate-500">
          📍 {t.location}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            href={`https://wa.me/91${COMPANY.whatsapp}`}
            variant="secondary"
          >
            {t.whatsapp}
          </Button>

          <Button
            href={`tel:${COMPANY.phone}`}
            variant="primary"
          >
            {t.call}
          </Button>
        </div>
      </div>
    </section>
  );
}