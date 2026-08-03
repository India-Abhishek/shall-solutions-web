/*
|--------------------------------------------------------------------------
| HTTP Client
|--------------------------------------------------------------------------
| Purpose:
| Base configuration for all HTTP requests.
|
| Future:
| - JWT Token
| - Refresh Token
| - Request Interceptors
| - Response Interceptors
|--------------------------------------------------------------------------
*/

import { ENV } from "@/config/env";

export const API_CLIENT = {
  baseUrl: ENV.API_URL,

  defaultHeaders: {
    "Content-Type": "application/json",
  },
} as const;