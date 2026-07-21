"use client";

import Image from "next/image";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { GALLERY } from "@/data/gallery";
import { useLanguage } from "@/components/common/language-provider";

export default function Gallery() {
  const { language } = useLanguage();

  const galleryItems = GALLERY
    .filter(item => item.active)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Section
      id="gallery"
      className="bg-slate-50"
    >
      <SectionTitle
        title={
          language === "hi"
            ? "हमारे कार्य"
            : "Our Work"
        }
        subtitle={
          language === "hi"
            ? "हमारी हाल की परियोजनाओं की एक झलक"
            : "A glimpse of our recent projects."
        }
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {galleryItems.map((item) => (

          <Card
            key={item.id}
            className="overflow-hidden p-0"
          >

            <div className="relative h-64">

              <Image
                src={item.image}
                alt={item.title[language]}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>

            <div className="p-6">

              <Badge variant="blue">
                {item.category[language]}
              </Badge>

              <h3 className="mt-4 text-xl font-semibold">
                {item.title[language]}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {item.description[language]}
              </p>

            </div>

          </Card>

        ))}

      </div>

    </Section>
  );
}