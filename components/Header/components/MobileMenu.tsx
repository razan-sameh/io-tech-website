"use client";

import { FC } from "react";
import ServiceDropdown from "./ServiceDropdownButton";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ setMenuOpen }) => {
const t = useTranslations("header");

  return (
    <div className="absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 lg:hidden z-50">
      <Link href="/" onClick={() => setMenuOpen(false)}>{t("home")}</Link>
      <Link href="/about" onClick={() => setMenuOpen(false)}>{t("about")}</Link>
      <ServiceDropdown />
      <Link href="/team" onClick={() => setMenuOpen(false)}>{t("team")}</Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>{t("contact")}</Link>

      <button className="bg-white text-[#3b2416] px-3 py-1 rounded hover:bg-gray-200 transition">
        {t("book")}
      </button>
    </div>
  );
};

export default MobileMenu;
