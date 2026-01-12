"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-16 py-6 flex justify-between items-center text-white">
      <div className="font-bold text-lg">ARK</div>

      <ul className="flex gap-10 text-sm font-medium">
        {["Home", "About Us", "Services", "Contact Us"].map((item) => (
          <li key={item} className="relative group">
            <Link href="#">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
