"use client";
import { useDispatch, useSelector } from "react-redux";

import { FaBars, FaTimes } from "react-icons/fa";
import ThemeButton from "./components/ThemeButton";
import LanguageDropdown from "./components/LanguageDropdown";
import ServiceDropdownButton from "./components/ServiceDropdownButton";
import MobileMenu from "./components/MobileMenu";
import SearchInput from "./components/SearchInput";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { AppDispatch, RootState } from "@/store";
import { toggleMobileMenu } from "@/store/menuSlice";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const { mobileMenuOpen, serviceMenuOpen } = useSelector(
    (state: RootState) => state.menu
  );
  const t = useTranslations("header");

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 text-white px-6 py-4 flex justify-between items-center ${
        mobileMenuOpen || serviceMenuOpen ? "bg-primary" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-xl font-bold">
        LOGO
      </Link>

      <nav className="hidden lg:flex gap-6 items-center">
        <Link href="/" className="hover:text-gray-300 transition">
          {t("home")}
        </Link>
        <Link href="/" className="hover:text-gray-300 transition">
          {t("about")}
        </Link>
        <ServiceDropdownButton />
        <Link href="/" className="hover:text-gray-300 transition">
          {t("team")}
        </Link>
        <Link href="/" className="hover:text-gray-300 transition">
          {t("contact")}
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <SearchInput />
        <ThemeButton />
        <LanguageDropdown />
        <button className="hidden lg:block border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-[#3b2416] transition">
          {t("book")}
        </button>
        <button
          className="block lg:hidden text-xl"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && <MobileMenu />}
    </header>
  );
}
