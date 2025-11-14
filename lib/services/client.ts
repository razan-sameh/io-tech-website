/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient, STRAPI_URL } from "../apiClient";
import { ClientAdapter } from "@/adapters/ClientAdapter";

const clientAdapter = ClientAdapter.getInstance(STRAPI_URL);

export async function fetchClient(locale: string) {
  const queryParams: Record<string, any> = {
    "populate[photo]": true,
  };
  const data = await apiClient<any>("/clients", {}, queryParams, locale);

  return clientAdapter.adaptMany(data.data);
}
