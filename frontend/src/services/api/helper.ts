/*
|--------------------------------------------------------------------------
| API Helper
|--------------------------------------------------------------------------
| Shared helper for GET, POST, PUT, DELETE.
|--------------------------------------------------------------------------
*/

import { API_CLIENT } from "./client";

export async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(
    `${API_CLIENT.baseUrl}${endpoint}`,
    {
      headers: {
        ...API_CLIENT.defaultHeaders,
        ...options.headers,
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error(
      `API Error (${response.status})`
    );
  }

  return response.json();
}