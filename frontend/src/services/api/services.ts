/*
|--------------------------------------------------------------------------
| Services API
|--------------------------------------------------------------------------
| All Service-related requests.
|--------------------------------------------------------------------------
*/

import { request } from "./helper";

import { API_ENDPOINTS } from "@/config/api";

import { Service } from "@/types/service";

/*
|--------------------------------------------------------------------------
| GET Services
|--------------------------------------------------------------------------
*/

export async function getServices() {
  return request<Service[]>(
    API_ENDPOINTS.SERVICES
  );
}