"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles/navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbarLinks">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`navbarLink ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
