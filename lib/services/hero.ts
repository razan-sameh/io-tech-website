/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient, STRAPI_URL } from "../apiClient";
import { HeroSectionAdapter } from "@/adapters/HeroSectionAdapter";

const heroAdapter = HeroSectionAdapter.getInstance(STRAPI_URL);

export async function fetchHero(locale: string) {
  const queryParams: Record<string, any> = {
    "populate[hero_slides][populate][media]": true,
    "populate[hero_slides][populate][BackgroundImage]": true,
  };

  const data = await apiClient<any>("/hero-section", {}, queryParams, locale);

  return heroAdapter.adapt(data.data);
}
