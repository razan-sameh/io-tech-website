/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServiceAdapter } from "@/adapters/ServiceAdapter";
import { apiClient, STRAPI_URL } from "../apiClient";

const serviceAdapter = ServiceAdapter.getInstance(STRAPI_URL);

export async function fetchService(
  locale: string,
  search?: string,
  page?: number,
  pageSize?: number
) {
  const queryParams: Record<string, any> = {
    "populate[image]": true,
    "populate[sections]": true,
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,
  };
  // If page & pageSize provided, use them
  if (page !== undefined && pageSize !== undefined) {
    queryParams["pagination[page]"] = page;
    queryParams["pagination[pageSize]"] = pageSize;
  }

  if (search && search.trim() !== "") {
    const q = search.trim();

    queryParams["filters[$or][0][title][$containsi]"] = q;
    queryParams["filters[$or][1][description][$containsi]"] = q;
    queryParams["filters[$or][2][sections][title][$containsi]"] = q;
    queryParams["filters[$or][3][sections][content][$containsi]"] = q;
  }

  const data = await apiClient<any>("/services", {}, queryParams, locale);

  // return serviceAdapter.adaptMany(data.data);
  return {
    data: serviceAdapter.adaptMany(data.data),
    meta: data.meta.pagination,
  };
}

export const fetchServiceById = async (locale: string, serviceId: string) => {
  const queryParams: Record<string, any> = {
    "populate[image]": true,
    "populate[sections]": true,
  };

  const res = await apiClient<any>(
    `/services/${serviceId}`,
    {},
    queryParams,
    locale
  );

  if (!res.data) {
    throw new Error("Product not found");
  }

  return serviceAdapter.adapt(res.data);
};
