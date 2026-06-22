"use client";

import { useLanguage } from "@/components/common/language-provider";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      text: `
SHALL SOLUTIONS is built on more than 30 years of practical experience and customer trust.

Beginning with Muskan Electronics in Bettiah, we earned a reputation for timely service, honest advice, and reliable support.

Today we are expanding our expertise into electronics, electrical solutions, furniture, PVC interiors, home improvement, and construction guidance.
      `,
    },

    hi: {
      title: "हमारे बारे में",
      text: `
SHALL SOLUTIONS 30 से अधिक वर्षों के अनुभव और ग्राहकों के विश्वास पर आधारित है।

बेतिया में मुस्कान इलेक्ट्रॉनिक्स से शुरुआत करते हुए हमने समय पर सेवा, ईमानदार सलाह और भरोसेमंद सहयोग के लिए पहचान बनाई।

आज हम इलेक्ट्रॉनिक्स, इलेक्ट्रिकल समाधान, फर्नीचर, पीवीसी इंटीरियर, गृह सुधार और निर्माण मार्गदर्शन के क्षेत्र में अपनी सेवाओं का विस्तार कर रहे हैं।
      `,
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          {t.title}
        </h2>

        <p className="text-lg leading-8 text-gray-600 whitespace-pre-line">
          {t.text}
        </p>
      </div>
    </section>
  );
}