import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaGooglePlusG } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary mt-2 text-white">
      {/* Top section with email subscription and social links */}
      <div className="border-b border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-8">
            {/* Email subscription */}
            <div className="flex items-center gap-2 bg-white rounded-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-l-md text-black text-sm focus:outline-none flex-1 md:flex-none md:w-48"
              />
              <button className="bg-primary text-white px-4 md:px-6 py-2 m-2 rounded-md text-sm hover:bg-[#2D1807] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Contacts link and Social media icons */}
            <div className="flex items-center gap-4 md:gap-8">
              {/* Contacts link */}
              <Link 
                href="/contacts" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contacts
              </Link>

              {/* Social media icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a 
                  href="#" 
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Google Plus"
                >
                  <FaGooglePlusG size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with navigation links and copyright */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Navigation links */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
              <Link 
                href="/about" 
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/strategy" 
                className="hover:text-gray-300 transition-colors"
              >
                Our Strategy
              </Link>
              <Link 
                href="/advantages" 
                className="hover:text-gray-300 transition-colors"
              >
                Our Advantages
              </Link>
              <Link 
                href="/social-responsibility" 
                className="hover:text-gray-300 transition-colors"
              >
                Social Responsibility
              </Link>
              <Link 
                href="/services" 
                className="hover:text-gray-300 transition-colors"
              >
                Our Services
              </Link>
            </nav>

            {/* Copyright */}
            <p className="text-center lg:text-right text-sm text-gray-300 whitespace-nowrap">
              © 2024 . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}