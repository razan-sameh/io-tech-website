"use client";

import Link from "next/link";
import { FC } from "react";
import ServiceDropdown from "./ServiceDropdown";

interface MobileMenuProps {
  showSearch: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ showSearch, setMenuOpen }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 lg:hidden z-50">
      <Link href="/" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link href="/about" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
        About Us
      </Link>
      <ServiceDropdown />
      <Link href="/team" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
        Our Team
      </Link>
      <Link href="/contact" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
        Contact Us
      </Link>

      {/* Mobile Book Appointment Button */}
      <button className="bg-white text-[#3b2416] px-3 py-1 rounded hover:bg-gray-200 transition">
        Book Appointment
      </button>
    </div>
  );
};

export default MobileMenu;
