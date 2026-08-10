
import { StaticImageData } from "next/image";

export type Testimonial = {
  id: number;
  displayOrder: number;
  active: boolean;

  name: string;
  location: string;

  rating: 1 | 2 | 3 | 4 | 5;

  message: {
    en: string;
    hi: string;
  };

  image?: StaticImageData | string;
};