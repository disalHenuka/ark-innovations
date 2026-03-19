"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/styles/navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className={`navbarContainer ${isHome ? 'home' : ''}`}>
        {!isHome && (
          <div className="navbarLogo">
            <Link href="/">
              <Image 
                src="/assets/logo black.png" 
                alt="Ark Innovations Logo" 
                width={80} 
                height={80}
                className="nav-logo-img"
              />
            </Link>
          </div>
        )}

        {/* Desktop Links */}
        <ul className="navbarLinks desktopMenu">
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

        {/* Mobile Hamburger Button */}
        <div className="mobileMenuBtn" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mobileDropdown"
          >
            <ul className="mobileLinks">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} onClick={() => setIsOpen(false)}>
                    <Link 
                      href={item.href} 
                      className={`mobileLink ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
