/*
|--------------------------------------------------------------------------
| Backend Endpoints
|--------------------------------------------------------------------------
*/

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",

    LOGOUT: "/auth/logout",

    REFRESH: "/auth/refresh",
  },

  CONTACT: {
    CREATE: "/  ",
  },

  SERVICES: "/services",

  GALLERY: "/gallery",

  FAQS: "/faqs",

  TESTIMONIALS: "/testimonials",
} as const;