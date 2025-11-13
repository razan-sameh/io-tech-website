// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-brown-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">My Logo</div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
