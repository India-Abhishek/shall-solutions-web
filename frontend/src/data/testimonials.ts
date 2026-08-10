import { Testimonial } from "@/types/testimonial";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    displayOrder: 1,
    active: true,
    name: "Rajesh Kumar",
    location: "Bettiah",
    rating: 5,
    message: {
      en: "Very professional service. Highly recommended.",
      hi: "बहुत अच्छी सेवा। मैं सभी को सुझाव दूँगा।",
    },
  },
  {
    id: 2,
    displayOrder: 2,
    active: true,
    name: "Anita Devi",
    location: "West Champaran",
    rating: 5,
    message: {
      en: "Excellent work and reasonable pricing.",
      hi: "उत्तम कार्य और उचित कीमत।",
    },
  },
];