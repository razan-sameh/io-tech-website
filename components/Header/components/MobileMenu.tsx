"use client";
import { useDispatch } from "react-redux";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ServiceDropdownButton from "./ServiceDropdownButton";
import { AppDispatch } from "@/store";
import { setMobileMenu } from "@/store/menuSlice";

export default function MobileMenu() {
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations("header");

  return (
    <div className="absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 lg:hidden z-50">
      <Link href="/" onClick={() => dispatch(setMobileMenu(false))}>{t("home")}</Link>
      <Link href="/about" onClick={() => dispatch(setMobileMenu(false))}>{t("about")}</Link>
      <ServiceDropdownButton/>
      <Link href="/team" onClick={() => dispatch(setMobileMenu(false))}>{t("team")}</Link>
      <Link href="/contact" onClick={() => dispatch(setMobileMenu(false))}>{t("contact")}</Link>
      <button className="bg-white text-[#3b2416] px-3 py-1 rounded hover:bg-gray-200 transition">{t("book")}</button>
    </div>
  );
}
