"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function FooterNav() {
  const t = useTranslations("footer");

  const links = [
    { href: '/', label: t("nav.about") },
    { href: '/', label: t("nav.strategy") },
    { href: '/', label: t("nav.advantages") },
    { href: '/', label: t("nav.socialResponsibility") },
    { href: '/', label: t("nav.services") },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-gray-300 transition-colors">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
