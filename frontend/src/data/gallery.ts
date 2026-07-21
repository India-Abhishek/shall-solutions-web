import { GalleryItem } from "@/types/gallery";

export const GALLERY: GalleryItem[] = [
  {
    id: 1,
    displayOrder: 1,
    slug: "electronics-installation",

    title: {
      en: "Electronics Installation",
      hi: "इलेक्ट्रॉनिक्स इंस्टॉलेशन",
    },

    description: {
      en: "Professional installation of TVs, appliances and electronic equipment.",
      hi: "टीवी, उपकरणों और इलेक्ट्रॉनिक्स की प्रोफेशनल इंस्टॉलेशन सेवा।",
    },

    category: {
      en: "Electronics",
      hi: "इलेक्ट्रॉनिक्स",
    },

    image: "/gallery/electronics.jpg",

    featured: true,
    active: true,
  },

  {
    id: 2,
    displayOrder: 2,
    slug: "pvc-interior-work",

    title: {
      en: "PVC Interior Work",
      hi: "पीवीसी इंटीरियर कार्य",
    },

    description: {
      en: "Modern PVC wall panels, ceilings, and interior solutions for homes and offices.",
      hi: "घरों और कार्यालयों के लिए आधुनिक पीवीसी वॉल पैनल, सीलिंग और इंटीरियर समाधान।",
    },

    category: {
      en: "PVC Interiors",
      hi: "पीवीसी इंटीरियर",
    },

    image: "/gallery/pvc.jpg",

    featured: true,
    active: true,
  },

  {
    id: 3,
    displayOrder: 3,
    slug: "furniture-installation",

    title: {
      en: "Furniture Installation",
      hi: "फर्नीचर इंस्टॉलेशन",
    },

    description: {
      en: "Quality furniture installation and home furnishing services with attention to detail.",
      hi: "उच्च गुणवत्ता वाली फर्नीचर इंस्टॉलेशन और होम फर्निशिंग सेवाएँ।",
    },

    category: {
      en: "Furniture",
      hi: "फर्नीचर",
    },

    image: "/gallery/furniture.jpg",

    featured: true,
    active: true,
  },
];