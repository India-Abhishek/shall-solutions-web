/*
|--------------------------------------------------------------------------
| Backend Endpoints
|--------------------------------------------------------------------------
| NOTE:
| These are RELATIVE paths.
| API base URL is added by the request helper.
|--------------------------------------------------------------------------
*/

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },

  CONTACT: {
    CREATE: "/contact",
  },

  SERVICES: "/services",

  GALLERY: "/gallery",

  FAQS: "/faqs",

  TESTIMONIALS: "/testimonials",
} as const;