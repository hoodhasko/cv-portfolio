"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Главная" },
    { href: "/projects", label: "Проекты" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex gap-6 px-4 py-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium ${
              pathname === link.href
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
