import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;

  displayOrder: number;

  slug: string;

  title: {
    en: string;
    hi: string;
  };

  description: {
    en: string;
    hi: string;
  };

  icon: LucideIcon;

  image: string;

  active: boolean;
}