/*
|--------------------------------------------------------------------------
| API Client
|--------------------------------------------------------------------------
| Purpose:
| Central place for all backend communication.
|
| Future:
| - JWT Authentication
| - Refresh Tokens
| - Request Interceptors
| - Error Handling
|--------------------------------------------------------------------------
*/

import { ENV } from "@/config/env";

export const API = {
  baseURL: ENV.API_URL,
} as const;

/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${API.baseURL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}