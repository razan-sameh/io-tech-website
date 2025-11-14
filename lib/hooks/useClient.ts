import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { fetchClient } from "../services/client";

export function useClient() {
  const locale = useLocale();

  return useQuery({
    queryKey: ["client", locale],
    queryFn: () => fetchClient(locale),
  });
}
