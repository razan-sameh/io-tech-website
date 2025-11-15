import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { fetchService, fetchServiceById } from "../services/service";

export function useService(search?: string, page?: number, pageSize?: number) {
  const locale = useLocale();

  return useQuery({
    queryKey: ["services", locale, search, page, pageSize],
    queryFn: () => fetchService(locale, search, page, pageSize),
    // ⭐ Cache forever (best for static Strapi content)
    staleTime: Infinity,
    gcTime: Infinity,
    // 🔒 Do NOT refetch
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}

export function useServiceById(serviceId: string) {
  const locale = useLocale();

  return useQuery({
    queryKey: ["service", locale, serviceId],
    queryFn: () => fetchServiceById(locale, serviceId),
    // ⭐ Cache forever (best for static Strapi content)
    staleTime: Infinity,
    gcTime: Infinity,
    // 🔒 Do NOT refetch
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
