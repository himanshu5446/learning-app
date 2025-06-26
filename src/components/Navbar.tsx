// components/Navbar.tsx

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Portfolio", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1f2a44] px-6 py-4 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Initial */}
        <div className="text-green-400 text-xl font-bold border border-green-400 rounded-full w-8 h-8 flex items-center justify-center">
          H
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-sm uppercase font-medium text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-green-400 transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
