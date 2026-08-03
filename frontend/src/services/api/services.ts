/*
|--------------------------------------------------------------------------
| Services API
|--------------------------------------------------------------------------
| All Service-related requests.
|--------------------------------------------------------------------------
*/

import { request } from "./helper";

import { API_ENDPOINTS } from "@/config/endpoints";

import { Service } from "@/types/service";

/*
|--------------------------------------------------------------------------
| GET Services
|--------------------------------------------------------------------------
*/

export async function getServices(): Promise<Service[]> {
  return request<Service[]>(
    API_ENDPOINTS.SERVICES
  );
}