import { useQuery } from "@tanstack/react-query";
import { fetchHero } from "../services/hero";
import { useLocale } from "next-intl";

export function useHero() {
  const locale = useLocale();

  return useQuery({
    queryKey: ["hero", locale],
    queryFn: () => fetchHero(locale),
  });
}
