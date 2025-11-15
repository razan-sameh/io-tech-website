"use client";

import FooterNav from "./FooterNav";
import { useTranslations } from "next-intl";

export default function FooterBottom() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <FooterNav />
          <p className="text-center lg:text-right text-sm text-gray-300 whitespace-nowrap">
            {t("copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </div>
  );
}
