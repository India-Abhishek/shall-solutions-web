import {
  Award,
  Handshake,
  House,
  ShieldCheck,
} from "lucide-react";

import { Feature } from "@/types/feature";

export const WHY_CHOOSE_US: Feature[] = [
  {
    id: 1,
    displayOrder: 1,

    title: {
      en: "30+ Years of Experience",
      hi: "30+ वर्षों का अनुभव",
    },

    description: {
      en: "More than three decades of trusted experience in serving customers with quality products and reliable services.",
      hi: "गुणवत्तापूर्ण उत्पादों और भरोसेमंद सेवाओं के साथ ग्राहकों की सेवा करने का 30 से अधिक वर्षों का अनुभव।",
    },

    icon: Award,

    active: true,
  },

  {
    id: 2,
    displayOrder: 2,

    title: {
      en: "Trusted by Customers",
      hi: "ग्राहकों का भरोसा",
    },

    description: {
      en: "Our customers trust us because we believe in honest advice, transparent pricing, and dependable service.",
      hi: "हम ईमानदार सलाह, उचित मूल्य और भरोसेमंद सेवा में विश्वास रखते हैं।",
    },

    icon: Handshake,

    active: true,
  },

  {
    id: 3,
    displayOrder: 3,

    title: {
      en: "Complete Home Solutions",
      hi: "संपूर्ण गृह समाधान",
    },

    description: {
      en: "From electronics and electrical work to furniture, PVC interiors and home improvement—we provide everything under one roof.",
      hi: "इलेक्ट्रॉनिक्स, इलेक्ट्रिकल कार्य, फर्नीचर, पीवीसी इंटीरियर और गृह सुधार—सभी सेवाएँ एक ही स्थान पर।",
    },

    icon: House,

    active: true,
  },

  {
    id: 4,
    displayOrder: 4,

    title: {
      en: "Quality & Reliability",
      hi: "गुणवत्ता और विश्वसनीयता",
    },

    description: {
      en: "Every project is completed with attention to quality, durability, and customer satisfaction.",
      hi: "हर कार्य गुणवत्ता, मजबूती और ग्राहक संतुष्टि को ध्यान में रखकर पूरा किया जाता है।",
    },

    icon: ShieldCheck,

    active: true,
  },
];