"use client";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import ServiceDropdownMenu from "./ServiceDropdownMenu";
import { useTranslations } from "next-intl";

export default function ServiceDropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("header");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:text-gray-300 transition"
      >
        {t("services")}
        <FaChevronDown
          className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && <ServiceDropdownMenu onClose={() => setIsOpen(false)} />}
    </div>
  );
}
