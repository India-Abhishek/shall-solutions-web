/*
|--------------------------------------------------------------------------
| API Helper
|--------------------------------------------------------------------------
| Shared helper for GET, POST, PUT, DELETE.
|--------------------------------------------------------------------------
*/

import { API_CLIENT } from "./client";
import { AppError } from "@/lib/errors";

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

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new AppError(
        data?.message ??
            `Request failed with status ${response.status}`,
        response.status
    );
  }

  return data as T;
}