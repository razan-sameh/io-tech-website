"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import ThemeButton from "./components/ThemeButton";
import LanguageDropdown from "./components/LanguageDropdown";
import ServiceDropdown from "./components/ServiceDropdown";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white px-6 py-4 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <div className="text-xl font-bold">LOGO</div>

      {/* Desktop Navigation (lg and up) */}
      <nav className="hidden lg:flex gap-6 items-center">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
        <ServiceDropdown />
        <Link href="/team" className="hover:text-gray-300 transition">Our Team</Link>
        <Link href="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Input (desktop only) */}
        {showSearch && <input type="text" placeholder="Search..." className="px-2 py-1 rounded text-black outline-none transition hidden md:block" />}

        {/* Search Icon */}
        <FaSearch className="cursor-pointer hover:text-gray-300" onClick={() => setShowSearch(!showSearch)} />

        {/* Theme Toggle */}
        <ThemeButton />

        {/* Language Toggle */}
        <LanguageDropdown />

        {/* Book Appointment Button (desktop only) */}
        <button className="hidden lg:block border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-[#3b2416] transition">
          Book Appointment
        </button>

        {/* Mobile Menu Icon (md down) */}
        <button className="block lg:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Component */}
      {menuOpen && <MobileMenu showSearch={showSearch} setMenuOpen={setMenuOpen} />}
    </header>
  );
}
