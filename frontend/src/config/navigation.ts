import { ROUTES } from "./routes";

export const NAVIGATION = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Services",
    href: ROUTES.SERVICES,
  },
  {
    label: "Gallery",
    href: ROUTES.GALLERY,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
  },
] as const;