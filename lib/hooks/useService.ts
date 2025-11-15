import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { fetchService, fetchServiceById } from "../services/service";

export function useService( search?: string, page?:number, pageSize?:number ) {
  const locale = useLocale();

  return useQuery({
    queryKey: ["service", locale, search, page, pageSize],
    queryFn: () => fetchService(locale, search, undefined, page, pageSize),
  });
}

export function useServiceById(productId:string) {
  const locale = useLocale();

  return useQuery({
    queryKey: ["product", locale,productId],
    queryFn:() =>
      fetchServiceById(locale, productId), // filters: specialOffer only
  });
}