// components/footer/FooterNav.tsx
import Link from 'next/link';

export default function FooterNav() {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/strategy', label: 'Our Strategy' },
    { href: '/advantages', label: 'Our Advantages' },
    { href: '/social-responsibility', label: 'Social Responsibility' },
    { href: '/services', label: 'Our Services' },
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
