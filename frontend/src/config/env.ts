/*
|--------------------------------------------------------------------------
| Environment Variables
|--------------------------------------------------------------------------
| Never access process.env directly.
| Always import from ENV.
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
| Environment Configuration
|--------------------------------------------------------------------------
| Purpose:
| Centralized access to environment variables.
|
| Future:
| - API URLs
| - Feature Flags
| - Analytics
|--------------------------------------------------------------------------
*/

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value;
}

export const ENV = {
  API_URL: getEnv("NEXT_PUBLIC_API_URL"),

  SITE_URL: getEnv("NEXT_PUBLIC_SITE_URL"),
} as const;