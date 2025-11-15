import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { fetchClient } from "../services/client";

export function useClient() {
  const locale = useLocale();

  return useQuery({
    queryKey: ["client", locale],
    queryFn: () => fetchClient(locale),
    // ⭐ Cache forever (best for static Strapi content)
    staleTime: Infinity,
    gcTime: Infinity,
    // 🔒 Do NOT refetch
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
