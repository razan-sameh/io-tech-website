"use client";

import { useService } from "@/lib/hooks/useService";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ServiceDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: services = [], isLoading, error } = useService();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Services Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:text-gray-300 transition"
      >
        Services
        <FaChevronDown className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-primary text-white rounded-lg shadow-2xl p-4 md:p-6 z-50 w-[90vw] md:w-[85vw] lg:w-screen max-w-[1200px]">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45"></div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 relative z-10 max-h-[70vh] overflow-y-auto">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.documentId}`}
                className="block text-xs md:text-sm hover:text-gray-300 transition py-1"
                onClick={()=>setIsOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}