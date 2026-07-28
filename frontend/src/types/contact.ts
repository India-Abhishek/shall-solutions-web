import { LucideIcon } from "lucide-react";

export interface ContactInfo {
  id: number;

  displayOrder: number;

  title: {
    en: string;
    hi: string;
  };

  value: string;

  icon: LucideIcon;

  href?: string;

  active: boolean;
}