/* eslint-disable @typescript-eslint/no-explicit-any */
import { TeamAdapter } from "@/adapters/TeamAdapter";
import { apiClient, STRAPI_URL } from "../apiClient";

const teamAdapter = TeamAdapter.getInstance(STRAPI_URL);

export async function fetchTeam(locale: string) {
  const queryParams: Record<string, any> = {
    "populate[photo]": true,
  };
  const data = await apiClient<any>("/team-members", {}, queryParams, locale);

  return teamAdapter.adaptMany(data.data);
}
