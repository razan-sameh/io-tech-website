import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { fetchTeam } from "../services/team";

export function useTeam() {
  const locale = useLocale();

  return useQuery({
    queryKey: ["team", locale],
    queryFn: () => fetchTeam(locale),
    // ⭐ Cache forever (best for static Strapi content)
    staleTime: Infinity,
    gcTime: Infinity,
    // 🔒 Do NOT refetch
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
