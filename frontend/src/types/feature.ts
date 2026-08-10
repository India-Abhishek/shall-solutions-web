import { LucideIcon } from "lucide-react";

export interface Feature {
  id: number;
  displayOrder: number;

  title: {
    en: string;
    hi: string;
  };

  description: {
    en: string;
    hi: string;
  };

  icon: LucideIcon;

  active: boolean;
}