"use client";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import ServiceDropdownMenu from "./ServiceDropdownMenu";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { toggleServiceMenu, setServiceMenu } from "@/store/menuSlice";

export default function ServiceDropdownButton() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("header");
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.menu.serviceMenuOpen);

  return (
    <div ref={dropdownRef} className="relative lg:static">
      <button
        onClick={() => dispatch(toggleServiceMenu())}
        className="flex items-center gap-2 hover:text-gray-300 transition"
      >
        {t("services")}
        <FaChevronDown
          className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && <ServiceDropdownMenu onClose={() => dispatch(setServiceMenu(false))} />}
    </div>
  );
}
