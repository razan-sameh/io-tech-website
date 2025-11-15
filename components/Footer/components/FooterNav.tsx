"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function FooterNav() {
  const t = useTranslations("footer");

  const links = [
    { href: '/about', label: t("nav.about") },
    { href: '/strategy', label: t("nav.strategy") },
    { href: '/advantages', label: t("nav.advantages") },
    { href: '/social-responsibility', label: t("nav.socialResponsibility") },
    { href: '/services', label: t("nav.services") },
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
