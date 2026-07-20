import {
  Tv,
  Zap,
  Sofa,
  Hammer,
  House,
  PanelsTopLeft,
} from "lucide-react";

import { Service } from "@/types/service";

export const SERVICES: Service[] = [
  {
    id: 1,
    displayOrder: 1,
    slug: "electronics",

    title: {
      en: "Electronics",
      hi: "इलेक्ट्रॉनिक्स",
    },

    description: {
      en: "TV, Refrigerator, Washing Machine and other electronics.",
      hi: "टीवी, रेफ्रिजरेटर, वॉशिंग मशीन और अन्य इलेक्ट्रॉनिक्स।",
    },

    icon: Tv,

    image: "",

    active: true,
  },

  {
    id: 2,
    displayOrder: 2,
    slug: "electrical",

    title: {
      en: "Electrical",
      hi: "इलेक्ट्रिकल",
    },

    description: {
      en: "Electrical installation and repair services.",
      hi: "इलेक्ट्रिकल इंस्टॉलेशन और मरम्मत सेवाएँ।",
    },

    icon: Zap,

    image: "",

    active: true,
  },

  {
    id: 3,
    displayOrder: 3,
    slug: "furniture",

    title: {
      en: "Furniture",
      hi: "फर्नीचर",
    },

    description: {
      en: "Furniture solutions for home and office.",
      hi: "घर और कार्यालय के लिए फर्नीचर समाधान।",
    },

    icon: Sofa,

    image: "",

    active: true,
  },

  {
    id: 4,
    displayOrder: 4,
    slug: "pvc-interiors",

    title: {
      en: "PVC Interiors",
      hi: "पीवीसी इंटीरियर",
    },

    description: {
      en: "Modern PVC wall panels and ceiling solutions.",
      hi: "आधुनिक पीवीसी वॉल पैनल और सीलिंग समाधान।",
    },

    icon: PanelsTopLeft,

    image: "",

    active: true,
  },

  {
    id: 5,
    displayOrder: 5,
    slug: "home-improvement",

    title: {
      en: "Home Improvement",
      hi: "गृह सुधार",
    },

    description: {
      en: "Complete home improvement consultation and solutions.",
      hi: "संपूर्ण गृह सुधार परामर्श एवं समाधान।",
    },

    icon: House,

    image: "",

    active: true,
  },

  {
    id: 6,
    displayOrder: 6,
    slug: "construction-support",

    title: {
      en: "Construction Support",
      hi: "निर्माण सहायता",
    },

    description: {
      en: "Guidance and support during home construction.",
      hi: "घर निर्माण के दौरान मार्गदर्शन और सहायता।",
    },

    icon: Hammer,

    image: "",

    active: true,
  },
];